import type { Difficulty } from '../data/types'

export interface AttemptAnswer {
  questionId: string
  userAnswer: string | null
  correct: boolean
}

export interface Attempt {
  id: string
  profileId: string
  setId: string | 'daily'
  part: Difficulty | 'all'
  dateISO: string
  score: number
  total: number
  timeUsedSec: number
  answers: AttemptAnswer[]
}

const ATTEMPTS_KEY = 'asmo_attempts'
const DAILY_KEY_PREFIX = 'asmo_daily_dates_'

function loadAllAttempts(): Attempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY)
    return raw ? (JSON.parse(raw) as Attempt[]) : []
  } catch {
    return []
  }
}

export function loadAttempts(profileId: string): Attempt[] {
  return loadAllAttempts().filter((a) => a.profileId === profileId)
}

export function saveAttempt(attempt: Attempt): void {
  const attempts = loadAllAttempts()
  attempts.unshift(attempt)
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts.slice(0, 500)))
}

export function clearAttempts(profileId: string): void {
  const remaining = loadAllAttempts().filter((a) => a.profileId !== profileId)
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(remaining))
}

export function loadCompletedDailyDates(profileId: string): string[] {
  try {
    const raw = localStorage.getItem(DAILY_KEY_PREFIX + profileId)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function markDailyCompleted(profileId: string, dateKey: string): void {
  const dates = loadCompletedDailyDates(profileId)
  if (!dates.includes(dateKey)) {
    dates.push(dateKey)
    localStorage.setItem(DAILY_KEY_PREFIX + profileId, JSON.stringify(dates))
  }
}

export function isDailyCompleted(profileId: string, dateKey: string): boolean {
  return loadCompletedDailyDates(profileId).includes(dateKey)
}
