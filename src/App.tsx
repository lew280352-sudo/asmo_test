import type { ReactNode } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import SetDetail from './pages/SetDetail'
import Exam from './pages/Exam'
import Review from './pages/Review'
import History from './pages/History'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-semibold text-indigo-600">
            ASMO คณิต ติวเข้ม
          </Link>
          <Link to="/history" className="text-sm text-slate-500 hover:text-indigo-600">
            ประวัติการทำ
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/set/:setId" element={<SetDetail />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/review" element={<Review />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
