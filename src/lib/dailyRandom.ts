import { QUESTIONS } from '../data/questions'
import type { Question } from '../data/types'

const DAILY_QUESTION_COUNT = 10
const DAILY_LESSON_QUESTION_COUNT = 5

function hashString(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0
  }
  return h >>> 0
}

// mulberry32 seeded PRNG
function mulberry32(seed: number): () => number {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function todayDateKey(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function seededShuffle(seed: string): Question[] {
  const rng = mulberry32(hashString(seed))
  const pool = [...QUESTIONS]
  // Fisher-Yates shuffle using seeded rng
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool
}

export function getDailyQuestions(dateKey: string): Question[] {
  return seededShuffle(dateKey).slice(0, DAILY_QUESTION_COUNT)
}

export function getDailyLessonQuestions(dateKey: string): Question[] {
  // different salt so the daily lesson set doesn't just mirror the daily test set
  return seededShuffle(`lesson-${dateKey}`).slice(0, DAILY_LESSON_QUESTION_COUNT)
}
