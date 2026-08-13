import { useState, type ReactNode } from 'react'
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import SetDetail from './pages/SetDetail'
import Exam from './pages/Exam'
import Review from './pages/Review'
import History from './pages/History'
import Stats from './pages/Stats'
import Learn from './pages/Learn'
import DailyLesson from './pages/DailyLesson'
import ProfileOnboarding from './pages/ProfileOnboarding'
import TrackSelect from './pages/TrackSelect'
import { clearActiveProfileId, getActiveProfile, type Profile } from './lib/profile'
import { clearActiveTrackId, getActiveTrack } from './lib/track'
import type { Track } from './data/tracks'

function Layout({
  profile,
  track,
  onSwitchProfile,
  onSwitchTrack,
  children,
}: {
  profile: Profile
  track: Track
  onSwitchProfile: () => void
  onSwitchTrack: () => void
  children: ReactNode
}) {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3">
          <Link to="/" className="min-w-0 truncate text-lg font-semibold text-indigo-600">
            ติวเข้มโอลิมปิก
          </Link>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm">
            <button
              onClick={onSwitchTrack}
              className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-100"
            >
              {track.shortName} ▾
            </button>
            <Link to="/learn" className="text-slate-500 hover:text-indigo-600">
              สูตร
            </Link>
            <Link to="/stats" className="text-slate-500 hover:text-indigo-600">
              สถิติ
            </Link>
            <Link to="/history" className="text-slate-500 hover:text-indigo-600">
              ประวัติ
            </Link>
            <button onClick={onSwitchProfile} className="text-slate-500 hover:text-indigo-600">
              {profile.name} ▾
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
    </div>
  )
}

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(() => getActiveProfile())
  const [track, setTrack] = useState<Track | null>(() => (profile ? getActiveTrack(profile.id) : null))

  if (!profile) {
    return (
      <ProfileOnboarding
        onReady={(p) => {
          setProfile(p)
          setTrack(getActiveTrack(p.id))
        }}
      />
    )
  }

  if (!track) {
    return <TrackSelect profileId={profile.id} onSelect={setTrack} />
  }

  function handleSwitchProfile() {
    clearActiveProfileId()
    setProfile(null)
    setTrack(null)
  }

  function handleSwitchTrack() {
    clearActiveTrackId(profile!.id)
    setTrack(null)
  }

  return (
    <HashRouter>
      <Layout profile={profile} track={track} onSwitchProfile={handleSwitchProfile} onSwitchTrack={handleSwitchTrack}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/set/:setId" element={<SetDetail />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/review" element={<Review />} />
          <Route path="/history" element={<History />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/lesson" element={<DailyLesson />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
