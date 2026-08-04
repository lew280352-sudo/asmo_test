import { Link } from 'react-router-dom'
import { EXAM_SETS } from '../data/questions'
import { PART_LABEL } from '../data/types'
import { loadAttempts } from '../lib/storage'

export default function History() {
  const attempts = loadAttempts()

  function setLabel(setId: string) {
    if (setId === 'daily') return 'สุ่มรายวัน'
    return EXAM_SETS.find((s) => s.id === setId)?.title ?? setId
  }

  return (
    <div className="space-y-4">
      <div>
        <Link to="/" className="text-sm text-indigo-600 hover:underline">
          ← กลับหน้าแรก
        </Link>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">ประวัติการทำข้อสอบ</h2>
      </div>

      {attempts.length === 0 ? (
        <p className="text-sm text-slate-500">ยังไม่มีประวัติการทำข้อสอบ</p>
      ) : (
        <div className="space-y-2">
          {attempts.map((a) => {
            const pct = Math.round((a.score / a.total) * 100)
            const date = new Date(a.dateISO)
            return (
              <div
                key={a.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3"
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
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
