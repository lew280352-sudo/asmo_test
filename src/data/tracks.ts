import type { TrackId } from './types'

export interface Track {
  id: TrackId
  name: string
  shortName: string
  description: string
  subjects?: string[]
}

export const TRACKS: Track[] = [
  {
    id: 'asmo',
    name: 'ASMO คณิต',
    shortName: 'ASMO',
    description: 'Asian Schools Mathematics Olympiad ระดับ ม.4-ม.6',
  },
  {
    id: 'posn',
    name: 'สอวน',
    shortName: 'สอวน',
    description: 'ข้อสอบคัดเลือกเข้าค่าย สอวน คณิตศาสตร์และคอมพิวเตอร์',
    subjects: ['คณิตศาสตร์', 'คอมพิวเตอร์'],
  },
]

export function getTrack(id: TrackId): Track {
  return TRACKS.find((t) => t.id === id)!
}
