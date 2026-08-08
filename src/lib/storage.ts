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
const LESSON_KEY_PREFIX = 'asmo_lesson_dates_'

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

function loadDateList(key: string): string[] {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

function markDateCompleted(key: string, dateKey: string): void {
  const dates = loadDateList(key)
  if (!dates.includes(dateKey)) {
    dates.push(dateKey)
    localStorage.setItem(key, JSON.stringify(dates))
  }
}

export function loadCompletedDailyDates(profileId: string): string[] {
  return loadDateList(DAILY_KEY_PREFIX + profileId)
}

export function markDailyCompleted(profileId: string, dateKey: string): void {
  markDateCompleted(DAILY_KEY_PREFIX + profileId, dateKey)
}

export function isDailyCompleted(profileId: string, dateKey: string): boolean {
  return loadCompletedDailyDates(profileId).includes(dateKey)
}

export function markLessonCompleted(profileId: string, dateKey: string): void {
  markDateCompleted(LESSON_KEY_PREFIX + profileId, dateKey)
}

export function isLessonCompleted(profileId: string, dateKey: string): boolean {
  return loadDateList(LESSON_KEY_PREFIX + profileId).includes(dateKey)
}
