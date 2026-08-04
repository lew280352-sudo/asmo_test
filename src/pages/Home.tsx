import { Link, useNavigate } from 'react-router-dom'
import { EXAM_SETS, QUESTIONS } from '../data/questions'
import { timeLimitMinutes } from '../data/types'
import { getDailyQuestions, todayDateKey } from '../lib/dailyRandom'
import { isDailyCompleted } from '../lib/storage'

export default function Home() {
  const navigate = useNavigate()
  const dateKey = todayDateKey()
  const dailyDone = isDailyCompleted(dateKey)

  function startDaily() {
    const questions = getDailyQuestions(dateKey)
    navigate('/exam', {
      state: {
        questions,
        part: 'all',
        setId: 'daily',
        title: `ทดสอบสุ่มรายวัน · ${dateKey}`,
        timeLimitMinutes: timeLimitMinutes('all', questions),
        dateKey,
      },
    })
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-indigo-900">ทดสอบสุ่มรายวัน</h2>
            <p className="mt-1 text-sm text-indigo-700">
              โจทย์ 10 ข้อ สุ่มใหม่ทุกวันจากคลังข้อสอบทั้งหมด · {dateKey}
            </p>
          </div>
          <button
            onClick={startDaily}
            className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {dailyDone ? 'ทำอีกครั้ง' : 'เริ่มทำ'}
          </button>
        </div>
        {dailyDone && (
          <p className="mt-2 text-xs text-indigo-600">คุณทำชุดวันนี้ไปแล้ว ✓ ทำซ้ำได้แต่จะไม่นับซ้ำในสถิติ</p>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold text-slate-800">ชุดข้อสอบ ASMO คณิต</h2>
        <div className="space-y-3">
          {EXAM_SETS.map((set) => {
            const count = QUESTIONS.filter((q) => q.setId === set.id).length
            return (
              <Link
                key={set.id}
                to={`/set/${set.id}`}
                className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-medium text-slate-900">{set.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-500">{set.description}</p>
                  </div>
                  <span className="shrink-0 self-start rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 sm:self-auto">
                    {set.grade} · {count} ข้อ
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
