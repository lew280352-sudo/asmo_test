import { useState } from 'react'
import { Link } from 'react-router-dom'
import { questionsForTrack } from '../data/catalog'
import { DIFFICULTY_LABEL } from '../data/types'
import { getDailyLessonQuestions, todayDateKey } from '../lib/dailyRandom'
import { markLessonCompleted } from '../lib/storage'
import { getActiveProfile } from '../lib/profile'
import { getActiveTrack } from '../lib/track'
import CodeBlock from '../components/CodeBlock'
import Scratchpad from '../components/Scratchpad'

export default function DailyLesson() {
  const profile = getActiveProfile()!
  const track = getActiveTrack(profile.id)!
  const dateKey = todayDateKey()
  const [questions] = useState(() => getDailyLessonQuestions(dateKey, questionsForTrack(track.id)))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [finished, setFinished] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [scratchOpen, setScratchOpen] = useState(false)

  const q = questions[index]
  const isLast = index === questions.length - 1

  function handleNext() {
    if (isLast) {
      markLessonCompleted(profile.id, track.id, dateKey)
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
    setRevealed(false)
    setShowTranslation(false)
  }

  if (finished) {
    return (
      <div className="space-y-5 text-center">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
          <p className="text-4xl">🎉</p>
          <h2 className="mt-3 text-lg font-semibold text-emerald-900">เรียนจบบทเรียนวันนี้แล้ว!</h2>
          <p className="mt-1 text-sm text-emerald-700">ทบทวนครบ {questions.length} ข้อ · {dateKey}</p>
        </div>
        <div className="flex justify-center gap-3">
          <Link to="/" className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-indigo-300">
            กลับหน้าแรก
          </Link>
          <Link to="/learn" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            ดูสูตรทั้งหมด
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 pb-24">
      <div>
        <Link to="/" className="text-sm text-indigo-600 hover:underline">
          ← กลับหน้าแรก
        </Link>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">บทเรียนรายวัน</h2>
        <p className="text-xs text-slate-500">
          ข้อ {index + 1} / {questions.length} · {dateKey}
        </p>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full bg-indigo-500 transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2 py-0.5">{DIFFICULTY_LABEL[q.difficulty]}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5">{q.topic}</span>
        </div>
        <p className="whitespace-pre-line text-base leading-relaxed text-slate-900 break-words">{q.questionText}</p>
        {q.questionTranslationTh &&
          (showTranslation ? (
            <p className="mt-1 text-sm italic text-slate-500 break-words">{q.questionTranslationTh}</p>
          ) : (
            <button
              onClick={() => setShowTranslation(true)}
              className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            >
              🌐 แปลเป็นไทย
            </button>
          ))}
        {q.codeSnippet && <CodeBlock code={q.codeSnippet} lang={q.codeLang} />}

        {q.choices ? (
          <div className="mt-4 space-y-2">
            {q.choices.map((choice) => {
              const isSelected = selected === choice
              const isCorrectChoice = revealed && choice === q.answer
              return (
                <button
                  key={choice}
                  onClick={() => !revealed && setSelected(choice)}
                  className={
                    'block w-full rounded-lg border px-4 py-2.5 text-left text-sm transition ' +
                    (isCorrectChoice
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : isSelected
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
            value={selected ?? ''}
            onChange={(e) => setSelected(e.target.value)}
            disabled={revealed}
            placeholder="ลองพิมพ์คำตอบของคุณก่อนดูเฉลย (จะข้ามก็ได้)"
            className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none disabled:bg-slate-50"
          />
        )}

        {revealed && (
          <div className="mt-4 rounded-lg bg-indigo-50 p-3 text-sm">
            <p className="font-medium text-indigo-900">เฉลย: {q.answer}</p>
            <p className="mt-2 whitespace-pre-line text-slate-700">{q.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            ดูวิธีทำแบบละเอียด
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            {isLast ? 'จบบทเรียน' : 'ข้อถัดไป'}
          </button>
        )}
      </div>

      {!scratchOpen && (
        <button
          onClick={() => setScratchOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-800"
        >
          ✏️ กระดาษทด
        </button>
      )}
      <Scratchpad isOpen={scratchOpen} onClose={() => setScratchOpen(false)} />
    </div>
  )
}
