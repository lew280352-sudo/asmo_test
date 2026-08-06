import { useState, type ReactNode } from 'react'
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import SetDetail from './pages/SetDetail'
import Exam from './pages/Exam'
import Review from './pages/Review'
import History from './pages/History'
import Stats from './pages/Stats'
import ProfileOnboarding from './pages/ProfileOnboarding'
import { clearActiveProfileId, getActiveProfile, type Profile } from './lib/profile'

function Layout({
  profile,
  onSwitch,
  children,
}: {
  profile: Profile
  onSwitch: () => void
  children: ReactNode
}) {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="min-w-0 truncate text-lg font-semibold text-indigo-600">
            ASMO คณิต ติวเข้ม
          </Link>
          <div className="flex shrink-0 items-center gap-3 text-sm">
            <Link to="/stats" className="text-slate-500 hover:text-indigo-600">
              สถิติ
            </Link>
            <Link to="/history" className="text-slate-500 hover:text-indigo-600">
              ประวัติ
            </Link>
            <button onClick={onSwitch} className="text-slate-500 hover:text-indigo-600">
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

  if (!profile) {
    return <ProfileOnboarding onReady={setProfile} />
  }

  function handleSwitch() {
    clearActiveProfileId()
    setProfile(null)
  }

  return (
    <HashRouter>
      <Layout profile={profile} onSwitch={handleSwitch}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/set/:setId" element={<SetDetail />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/review" element={<Review />} />
          <Route path="/history" element={<History />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
