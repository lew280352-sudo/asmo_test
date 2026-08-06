import type { Difficulty } from '../data/types'

export interface AttemptAnswer {
  questionId: string
  userAnswer: string | null
  correct: boolean
}

export interface Attempt {
  id: string
  setId: string | 'daily'
  part: Difficulty | 'all'
  dateISO: string
  score: number
  total: number
  timeUsedSec: number
  answers: AttemptAnswer[]
}

const ATTEMPTS_KEY = 'asmo_attempts'
const DAILY_KEY = 'asmo_daily_dates'

export function loadAttempts(): Attempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY)
    return raw ? (JSON.parse(raw) as Attempt[]) : []
  } catch {
    return []
  }
}

export function saveAttempt(attempt: Attempt): void {
  const attempts = loadAttempts()
  attempts.unshift(attempt)
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts.slice(0, 200)))
}

export function clearAttempts(): void {
  localStorage.removeItem(ATTEMPTS_KEY)
}

export function loadCompletedDailyDates(): string[] {
  try {
    const raw = localStorage.getItem(DAILY_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function markDailyCompleted(dateKey: string): void {
  const dates = loadCompletedDailyDates()
  if (!dates.includes(dateKey)) {
    dates.push(dateKey)
    localStorage.setItem(DAILY_KEY, JSON.stringify(dates))
  }
}

export function isDailyCompleted(dateKey: string): boolean {
  return loadCompletedDailyDates().includes(dateKey)
}
