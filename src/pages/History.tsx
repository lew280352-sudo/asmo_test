import { Link, useNavigate } from 'react-router-dom'
import { EXAM_SETS, QUESTIONS } from '../data/catalog'
import { PART_LABEL } from '../data/types'
import { clearAttempts, loadAttempts, type Attempt } from '../lib/storage'
import { getActiveProfile } from '../lib/profile'
import { getActiveTrack } from '../lib/track'

export default function History() {
  const navigate = useNavigate()
  const profile = getActiveProfile()!
  const track = getActiveTrack(profile.id)!
  const attempts = loadAttempts(profile.id, track.id)

  function setLabel(setId: string) {
    if (setId === 'daily') return 'สุ่มรายวัน'
    return EXAM_SETS.find((s) => s.id === setId)?.title ?? setId
  }

  function openReview(attempt: Attempt) {
    const questions = attempt.answers
      .map((a) => QUESTIONS.find((q) => q.id === a.questionId))
      .filter((q): q is (typeof QUESTIONS)[number] => q !== undefined)
    navigate('/review', {
      state: {
        attempt,
        questions,
        title: `${setLabel(attempt.setId)} · พาท${PART_LABEL[attempt.part]}`,
      },
    })
  }

  function handleClear() {
    if (confirm('ล้างประวัติการทำข้อสอบทั้งหมด? ทำแล้วกู้คืนไม่ได้')) {
      clearAttempts(profile.id, track.id)
      navigate(0)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link to="/" className="text-sm text-indigo-600 hover:underline">
            ← กลับหน้าแรก
          </Link>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">ประวัติการทำข้อสอบ</h2>
        </div>
        {attempts.length > 0 && (
          <button
            onClick={handleClear}
            className="shrink-0 rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50"
          >
            ล้างประวัติ
          </button>
        )}
      </div>

      {attempts.length === 0 ? (
        <p className="text-sm text-slate-500">ยังไม่มีประวัติการทำข้อสอบ</p>
      ) : (
        <div className="space-y-2">
          {attempts.map((a) => {
            const pct = Math.round((a.score / a.total) * 100)
            const date = new Date(a.dateISO)
            return (
              <button
                key={a.id}
                onClick={() => openReview(a)}
                className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-indigo-300 hover:shadow-sm"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">
                    {setLabel(a.setId)} · พาท{PART_LABEL[a.part]}
                  </p>
                  <p className="text-xs text-slate-500">
                    {date.toLocaleDateString('th-TH')} {date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm font-semibold text-indigo-600">
                    {a.score}/{a.total}
                  </p>
                  <p className="text-xs text-slate-500">{pct}%</p>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
