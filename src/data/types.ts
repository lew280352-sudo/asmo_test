export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Question {
  id: string
  setId: string
  difficulty: Difficulty
  topic: string
  questionText: string
  questionTranslationTh: string
  choices?: string[]
  answer: string
  explanation: string
  source?: string
}

export interface ExamSet {
  id: string
  title: string
  grade: string
  description: string
  note?: string
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: 'ง่าย',
  medium: 'กลาง',
  hard: 'ยาก',
}

export type PartKey = Difficulty | 'all'

export const PART_LABEL: Record<PartKey, string> = {
  easy: 'ง่าย',
  medium: 'กลาง',
  hard: 'ยาก',
  all: 'ทั้งหมด',
}

// minutes per question used to derive a part's time limit
const MINUTES_PER_QUESTION: Record<Difficulty, number> = {
  easy: 1.5,
  medium: 2.5,
  hard: 4,
}

export function timeLimitMinutes(part: PartKey, questions: Question[]): number {
  if (part === 'all') {
    const total = questions.reduce((sum, q) => sum + MINUTES_PER_QUESTION[q.difficulty], 0)
    return Math.max(10, Math.round(total))
  }
  return Math.max(5, Math.round(questions.length * MINUTES_PER_QUESTION[part]))
}
