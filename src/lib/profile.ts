export interface Profile {
  id: string
  name: string
  createdAt: string
}

const PROFILES_KEY = 'asmo_profiles'
const ACTIVE_KEY = 'asmo_active_profile'

export function loadProfiles(): Profile[] {
  try {
    const raw = localStorage.getItem(PROFILES_KEY)
    return raw ? (JSON.parse(raw) as Profile[]) : []
  } catch {
    return []
  }
}

function saveProfiles(profiles: Profile[]): void {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
}

export function getActiveProfileId(): string | null {
  return localStorage.getItem(ACTIVE_KEY)
}

export function setActiveProfileId(id: string): void {
  localStorage.setItem(ACTIVE_KEY, id)
}

export function clearActiveProfileId(): void {
  localStorage.removeItem(ACTIVE_KEY)
}

export function getActiveProfile(): Profile | null {
  const id = getActiveProfileId()
  if (!id) return null
  return loadProfiles().find((p) => p.id === id) ?? null
}

export function createProfile(name: string): Profile {
  const trimmed = name.trim()
  const profiles = loadProfiles()
  const profile: Profile = {
    id: `p_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
    name: trimmed,
    createdAt: new Date().toISOString(),
  }
  profiles.push(profile)
  saveProfiles(profiles)
  setActiveProfileId(profile.id)
  return profile
}

export function selectProfile(id: string): Profile | null {
  const profile = loadProfiles().find((p) => p.id === id) ?? null
  if (profile) setActiveProfileId(profile.id)
  return profile
}
