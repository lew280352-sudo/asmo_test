import { useNavigate, useParams, Link } from 'react-router-dom'
import { EXAM_SETS, QUESTIONS } from '../data/questions'
import { DIFFICULTY_LABEL, PART_LABEL, timeLimitMinutes, type PartKey } from '../data/types'

const PARTS: PartKey[] = ['easy', 'medium', 'hard', 'all']

export default function SetDetail() {
  const { setId } = useParams<{ setId: string }>()
  const navigate = useNavigate()
  const set = EXAM_SETS.find((s) => s.id === setId)

  if (!set) {
    return (
      <div className="text-center text-slate-500">
        ไม่พบชุดข้อสอบนี้ <Link to="/" className="text-indigo-600 underline">กลับหน้าแรก</Link>
      </div>
    )
  }

  const setQuestions = QUESTIONS.filter((q) => q.setId === set.id)

  function startPart(part: PartKey) {
    const questions =
      part === 'all' ? setQuestions : setQuestions.filter((q) => q.difficulty === part)
    navigate('/exam', {
      state: {
        questions,
        part,
        setId: set!.id,
        title: `${set!.title} · พาท${PART_LABEL[part]}`,
        timeLimitMinutes: timeLimitMinutes(part, questions),
      },
    })
  }

  return (
    <div className="space-y-5">
      <div>
        <Link to="/" className="text-sm text-indigo-600 hover:underline">
          ← กลับหน้าแรก
        </Link>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">{set.title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          {set.description} · {set.grade}
        </p>
        {set.note && (
          <p className="mt-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">{set.note}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PARTS.map((part) => {
          const questions =
            part === 'all' ? setQuestions : setQuestions.filter((q) => q.difficulty === part)
          const minutes = timeLimitMinutes(part, questions)
          return (
            <button
              key={part}
              onClick={() => startPart(part)}
              disabled={questions.length === 0}
              className="flex flex-col items-start rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 hover:shadow-sm disabled:opacity-40"
            >
              <span
                className={
                  'mb-2 rounded-full px-2.5 py-0.5 text-xs font-medium ' +
                  (part === 'easy'
                    ? 'bg-emerald-100 text-emerald-700'
                    : part === 'medium'
                      ? 'bg-amber-100 text-amber-700'
                      : part === 'hard'
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-indigo-100 text-indigo-700')
                }
              >
                พาท{PART_LABEL[part]}
              </span>
              <span className="text-base font-medium text-slate-900">{questions.length} ข้อ</span>
              <span className="mt-1 text-sm text-slate-500">เวลา {minutes} นาที</span>
            </button>
          )
        })}
      </div>

      <div className="rounded-lg bg-slate-100 p-3 text-xs text-slate-500">
        ระดับความยาก:{' '}
        {(['easy', 'medium', 'hard'] as const).map((d) => DIFFICULTY_LABEL[d]).join(' · ')}
      </div>
    </div>
  )
}
