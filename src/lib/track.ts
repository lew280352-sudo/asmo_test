import type { TrackId } from '../data/types'
import { getTrack, type Track } from '../data/tracks'

const TRACK_KEY_PREFIX = 'asmo_active_track_'

export function getActiveTrackId(profileId: string): TrackId | null {
  return localStorage.getItem(TRACK_KEY_PREFIX + profileId) as TrackId | null
}

export function setActiveTrackId(profileId: string, trackId: TrackId): void {
  localStorage.setItem(TRACK_KEY_PREFIX + profileId, trackId)
}

export function clearActiveTrackId(profileId: string): void {
  localStorage.removeItem(TRACK_KEY_PREFIX + profileId)
}

export function getActiveTrack(profileId: string): Track | null {
  const id = getActiveTrackId(profileId)
  return id ? getTrack(id) : null
}
