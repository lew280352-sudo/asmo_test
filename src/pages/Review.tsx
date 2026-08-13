import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { Question } from '../data/types'
import { DIFFICULTY_LABEL } from '../data/types'
import type { Attempt } from '../lib/storage'

interface ReviewState {
  attempt: Attempt
  questions: Question[]
  title: string
}

export default function Review() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as ReviewState | null

  if (!state) {
    return (
      <div className="text-center text-slate-500">
        ไม่พบผลการทดสอบ
        <div className="mt-3">
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
          >
            กลับหน้าแรก
          </button>
        </div>
      </div>
    )
  }

  const { attempt, questions, title } = state
  const pct = Math.round((attempt.score / attempt.total) * 100)
  const minutes = Math.floor(attempt.timeUsedSec / 60)
  const secs = attempt.timeUsedSec % 60

  const answerByQ = new Map(attempt.answers.map((a) => [a.questionId, a]))

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
        <p className="text-sm text-slate-500">{title}</p>
        <p className="mt-2 text-4xl font-bold text-indigo-600">
          {attempt.score}/{attempt.total}
        </p>
        <p className="mt-1 text-sm text-slate-500">คิดเป็น {pct}% · ใช้เวลา {minutes} นาที {secs} วินาที</p>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => {
          const a = answerByQ.get(q.id)
          const correct = a?.correct ?? false
          return (
            <div
              key={q.id}
              className={
                'rounded-xl border p-4 ' +
                (correct ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50')
              }
            >
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>ข้อ {idx + 1}</span>
                <span className="rounded-full bg-white px-2 py-0.5">{DIFFICULTY_LABEL[q.difficulty]}</span>
                <span className="rounded-full bg-white px-2 py-0.5">{q.topic}</span>
                <span
                  className={
                    'ml-auto rounded-full px-2 py-0.5 font-medium ' +
                    (correct ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white')
                  }
                >
                  {correct ? 'ถูก' : 'ผิด'}
                </span>
              </div>
              <p className="whitespace-pre-line text-sm break-words text-slate-900">{q.questionText}</p>
              {q.questionTranslationTh && (
                <p className="mt-1 text-sm break-words italic text-slate-500">{q.questionTranslationTh}</p>
              )}
              <p className="mt-2 text-sm text-slate-600">
                คำตอบของคุณ: <span className="font-medium">{a?.userAnswer ?? '(ไม่ได้ตอบ)'}</span>
              </p>
              {!correct && (
                <div className="mt-2 rounded-lg bg-white p-3 text-sm">
                  <p className="font-medium text-emerald-700">เฉลย: {q.answer}</p>
                  <p className="mt-1 whitespace-pre-line text-slate-600">{q.explanation}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex justify-center gap-3 pb-4">
        <Link
          to="/"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-indigo-300"
        >
          กลับหน้าแรก
        </Link>
        <Link
          to="/history"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          ดูประวัติการทำ
        </Link>
      </div>
    </div>
  )
}
