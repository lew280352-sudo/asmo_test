import type { Difficulty, TrackId } from '../data/types'

export interface AttemptAnswer {
  questionId: string
  userAnswer: string | null
  correct: boolean
}

export interface Attempt {
  id: string
  profileId: string
  trackId: TrackId
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

export function loadAttempts(profileId: string, trackId: TrackId): Attempt[] {
  return loadAllAttempts().filter((a) => a.profileId === profileId && a.trackId === trackId)
}

export function saveAttempt(attempt: Attempt): void {
  const attempts = loadAllAttempts()
  attempts.unshift(attempt)
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts.slice(0, 500)))
}

export function clearAttempts(profileId: string, trackId: TrackId): void {
  const remaining = loadAllAttempts().filter((a) => !(a.profileId === profileId && a.trackId === trackId))
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

export function loadCompletedDailyDates(profileId: string, trackId: TrackId): string[] {
  return loadDateList(DAILY_KEY_PREFIX + profileId + '_' + trackId)
}

export function markDailyCompleted(profileId: string, trackId: TrackId, dateKey: string): void {
  markDateCompleted(DAILY_KEY_PREFIX + profileId + '_' + trackId, dateKey)
}

export function isDailyCompleted(profileId: string, trackId: TrackId, dateKey: string): boolean {
  return loadCompletedDailyDates(profileId, trackId).includes(dateKey)
}

export function markLessonCompleted(profileId: string, trackId: TrackId, dateKey: string): void {
  markDateCompleted(LESSON_KEY_PREFIX + profileId + '_' + trackId, dateKey)
}

export function isLessonCompleted(profileId: string, trackId: TrackId, dateKey: string): boolean {
  return loadDateList(LESSON_KEY_PREFIX + profileId + '_' + trackId).includes(dateKey)
}
