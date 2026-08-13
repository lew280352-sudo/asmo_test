import { Link } from 'react-router-dom'
import { questionsForTrack } from '../data/catalog'
import { DIFFICULTY_LABEL, type Difficulty } from '../data/types'
import { loadAttempts } from '../lib/storage'
import { getActiveProfile } from '../lib/profile'
import { getActiveTrack } from '../lib/track'

interface Tally {
  correct: number
  total: number
}

type Tier = 'weak' | 'mid' | 'strong'

function tierOf(pct: number): Tier {
  if (pct < 40) return 'weak'
  if (pct < 70) return 'mid'
  return 'strong'
}

const TIER_LABEL: Record<Tier, string> = {
  weak: 'ควรฝึกเพิ่ม',
  mid: 'ปานกลาง',
  strong: 'แข็งแกร่ง',
}

const TIER_BAR_CLASS: Record<Tier, string> = {
  weak: 'bg-rose-500',
  mid: 'bg-amber-500',
  strong: 'bg-emerald-500',
}

const TIER_BADGE_CLASS: Record<Tier, string> = {
  weak: 'bg-rose-100 text-rose-700',
  mid: 'bg-amber-100 text-amber-700',
  strong: 'bg-emerald-100 text-emerald-700',
}

function Meter({ label, tally, extra }: { label: string; tally: Tally; extra?: string }) {
  if (tally.total === 0) {
    return (
      <div>
        <div className="mb-1 flex items-baseline justify-between gap-2">
          <span className="truncate text-sm font-medium text-slate-800">{label}</span>
          <span className="text-xs text-slate-400">ยังไม่มีข้อมูล</span>
        </div>
        <div className="h-2.5 w-full bg-slate-100" />
      </div>
    )
  }

  const pct = Math.round((tally.correct / tally.total) * 100)
  const tier = tierOf(pct)
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <div className="min-w-0">
          <span className="truncate text-sm font-medium text-slate-800">{label}</span>
          {extra && <span className="ml-1.5 text-xs text-slate-400">{extra}</span>}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className={'rounded-full px-2 py-0.5 text-xs font-medium ' + TIER_BADGE_CLASS[tier]}>
            {TIER_LABEL[tier]}
          </span>
          <span className="text-sm font-semibold text-slate-900">{pct}%</span>
        </div>
      </div>
      <div className="h-2.5 w-full bg-slate-100">
        <div className={'h-full ' + TIER_BAR_CLASS[tier]} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function Stats() {
  const profile = getActiveProfile()!
  const track = getActiveTrack(profile.id)!
  const attempts = loadAttempts(profile.id, track.id)
  const trackQuestions = questionsForTrack(track.id)

  const overall: Tally = { correct: 0, total: 0 }
  const byDifficulty: Record<Difficulty, Tally> = {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 },
  }
  const byTopic: Record<string, Tally> = {}

  for (const attempt of attempts) {
    for (const a of attempt.answers) {
      const question = trackQuestions.find((q) => q.id === a.questionId)
      if (!question) continue
      overall.total += 1
      byDifficulty[question.difficulty].total += 1
      byTopic[question.topic] ??= { correct: 0, total: 0 }
      byTopic[question.topic].total += 1
      if (a.correct) {
        overall.correct += 1
        byDifficulty[question.difficulty].correct += 1
        byTopic[question.topic].correct += 1
      }
    }
  }

  const topicRows = Object.entries(byTopic)
    .map(([topic, tally]) => ({ topic, tally, pct: tally.total > 0 ? (tally.correct / tally.total) * 100 : 0 }))
    .sort((a, b) => a.pct - b.pct)

  const overallPct = overall.total > 0 ? Math.round((overall.correct / overall.total) * 100) : 0

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-sm text-indigo-600 hover:underline">
          ← กลับหน้าแรก
        </Link>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">สถิติของ {profile.name}</h2>
        <p className="text-xs text-slate-500">สนามสอบ {track.name}</p>
      </div>

      {attempts.length === 0 ? (
        <p className="text-sm text-slate-500">
          ยังไม่มีข้อมูล ลองไป{' '}
          <Link to="/" className="text-indigo-600 underline">
            ทำโจทย์
          </Link>{' '}
          สักชุดก่อนนะ
        </p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-slate-900">{attempts.length}</p>
              <p className="mt-1 text-xs text-slate-500">ครั้งที่ทำ</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-slate-900">{overall.total}</p>
              <p className="mt-1 text-xs text-slate-500">ข้อที่ทำทั้งหมด</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-2xl font-semibold text-indigo-600">{overallPct}%</p>
              <p className="mt-1 text-xs text-slate-500">ความแม่นยำโดยรวม</p>
            </div>
          </div>

          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-800">แยกตามระดับความยาก</h3>
            <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
              {(['easy', 'medium', 'hard'] as const).map((d) => (
                <Meter
                  key={d}
                  label={DIFFICULTY_LABEL[d]}
                  tally={byDifficulty[d]}
                  extra={`${byDifficulty[d].correct}/${byDifficulty[d].total} ข้อ`}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-800">
              แยกตามหัวข้อ · เรียงจากจุดด้อยไปจุดเด่น
            </h3>
            <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
              {topicRows.map(({ topic, tally }) => (
                <Meter key={topic} label={topic} tally={tally} extra={`${tally.correct}/${tally.total} ข้อ`} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
