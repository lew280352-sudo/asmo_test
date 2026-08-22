import { EXAM_SETS as ASMO_EXAM_SETS, QUESTIONS as ASMO_QUESTIONS } from './questions'
import { POSN_EXAM_SETS, POSN_QUESTIONS } from './posnQuestions'
import { SAT_EXAM_SETS, SAT_QUESTIONS } from './satQuestions'
import type { ExamSet, Question, TrackId } from './types'

export const EXAM_SETS: ExamSet[] = [...ASMO_EXAM_SETS, ...POSN_EXAM_SETS, ...SAT_EXAM_SETS]
export const QUESTIONS: Question[] = [...ASMO_QUESTIONS, ...POSN_QUESTIONS, ...SAT_QUESTIONS]

export function examSetsForTrack(trackId: TrackId): ExamSet[] {
  return EXAM_SETS.filter((s) => s.trackId === trackId)
}

export function questionsForTrack(trackId: TrackId): Question[] {
  const setIds = new Set(examSetsForTrack(trackId).map((s) => s.id))
  return QUESTIONS.filter((q) => setIds.has(q.setId))
}
