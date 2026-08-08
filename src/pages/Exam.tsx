import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { Difficulty, PartKey, Question } from '../data/types'
import { DIFFICULTY_LABEL } from '../data/types'
import { saveAttempt, markDailyCompleted, type Attempt } from '../lib/storage'
import { getActiveProfile } from '../lib/profile'
import Scratchpad from '../components/Scratchpad'
import FormulaSheet from '../components/FormulaSheet'

interface ExamState {
  questions: Question[]
  part: PartKey
  setId: string
  title: string
  timeLimitMinutes: number
  dateKey?: string
}

export default function Exam() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as ExamState | null

  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [secondsLeft, setSecondsLeft] = useState(() => (state ? state.timeLimitMinutes * 60 : 0))
  const [current, setCurrent] = useState(0)
  const [activePanel, setActivePanel] = useState<'none' | 'scratch' | 'formula'>('none')
  const submittedRef = useRef(false)

  const questions = useMemo(() => state?.questions ?? [], [state])

  useEffect(() => {
    if (!state) return
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [state])

  useEffect(() => {
    if (state && secondsLeft === 0 && !submittedRef.current) {
      handleSubmit()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft])

  if (!state || questions.length === 0) {
    return (
      <div className="text-center text-slate-500">
        ไม่พบข้อมูลการทดสอบ กรุณาเริ่มใหม่จากหน้าแรก
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

  function handleSubmit() {
    if (submittedRef.current) return
    submittedRef.current = true

    const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '')
    const attemptAnswers = questions.map((q) => {
      const userAnswer = answers[q.id] ?? null
      return {
        questionId: q.id,
        userAnswer,
        correct: userAnswer !== null && normalize(userAnswer) === normalize(q.answer),
      }
    })
    const score = attemptAnswers.filter((a) => a.correct).length
    const timeUsedSec = state!.timeLimitMinutes * 60 - secondsLeft

    const attempt: Attempt = {
      id: `${Date.now()}`,
      profileId: getActiveProfile()!.id,
      setId: state!.setId,
      part: state!.part === 'all' ? 'all' : (state!.part as Difficulty),
      dateISO: new Date().toISOString(),
      score,
      total: questions.length,
      timeUsedSec,
      answers: attemptAnswers,
    }
    saveAttempt(attempt)
    if (state!.dateKey) markDailyCompleted(attempt.profileId, state!.dateKey)

    navigate('/review', { state: { attempt, questions, title: state!.title }, replace: true })
  }

  const q = questions[current]
  const minutes = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const lowTime = secondsLeft <= 60

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-slate-900">{state.title}</h2>
          <p className="text-xs text-slate-500">
            ข้อ {current + 1} / {questions.length}
          </p>
        </div>
        <div
          className={
            'shrink-0 rounded-lg px-3 py-1.5 text-sm font-mono font-medium tabular-nums ' +
            (lowTime ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700')
          }
        >
          {String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full bg-indigo-500 transition-all"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2 py-0.5">{DIFFICULTY_LABEL[q.difficulty]}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5">{q.topic}</span>
        </div>
        <p className="text-base leading-relaxed text-slate-900 break-words">{q.questionText}</p>

        {q.choices ? (
          <div className="mt-4 space-y-2">
            {q.choices.map((choice) => {
              const selected = answers[q.id] === choice
              return (
                <button
                  key={choice}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: choice }))}
                  className={
                    'block w-full rounded-lg border px-4 py-2.5 text-left text-sm transition ' +
                    (selected
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-200')
                  }
                >
                  {choice}
                </button>
              )
            })}
          </div>
        ) : (
          <input
            type="text"
            value={answers[q.id] ?? ''}
            onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
            placeholder="พิมพ์คำตอบของคุณ"
            className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none"
          />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap justify-center gap-1.5">
          {questions.map((qq, idx) => (
            <button
              key={qq.id}
              onClick={() => setCurrent(idx)}
              className={
                'h-7 w-7 shrink-0 rounded-md text-xs font-medium ' +
                (idx === current
                  ? 'bg-indigo-600 text-white'
                  : answers[qq.id]
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-slate-100 text-slate-500')
              }
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 disabled:opacity-40"
          >
            ก่อนหน้า
          </button>

          {current === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              ส่งคำตอบ
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              ถัดไป
            </button>
          )}
        </div>
      </div>

      {activePanel !== 'formula' && (
        <button
          onClick={() => setActivePanel('formula')}
          className="fixed bottom-24 right-5 z-40 flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-800"
        >
          📘 สูตร
        </button>
      )}
      {activePanel !== 'scratch' && (
        <button
          onClick={() => setActivePanel('scratch')}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-800"
        >
          ✏️ กระดาษทด
        </button>
      )}

      <Scratchpad isOpen={activePanel === 'scratch'} onClose={() => setActivePanel('none')} />
      <FormulaSheet isOpen={activePanel === 'formula'} onClose={() => setActivePanel('none')} />
    </div>
  )
}
