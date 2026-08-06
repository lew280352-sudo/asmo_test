import { useState } from 'react'
import { createProfile, loadProfiles, selectProfile, type Profile } from '../lib/profile'

export default function ProfileOnboarding({ onReady }: { onReady: (profile: Profile) => void }) {
  const [profiles] = useState(() => loadProfiles())
  const [name, setName] = useState('')

  function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    onReady(createProfile(name))
  }

  function handlePick(id: string) {
    const profile = selectProfile(id)
    if (profile) onReady(profile)
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-center text-lg font-semibold text-indigo-600">ASMO คณิต ติวเข้ม</h1>
        <p className="mt-1 text-center text-sm text-slate-500">เข้าสู่ระบบเพื่อเริ่มฝึกทำโจทย์</p>

        {profiles.length > 0 && (
          <div className="mt-5 space-y-2">
            <p className="text-xs font-medium text-slate-500">ผู้ใช้ในเครื่องนี้</p>
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePick(p.id)}
                className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-left text-sm font-medium text-slate-800 hover:border-indigo-300 hover:bg-indigo-50"
              >
                {p.name}
              </button>
            ))}
            <div className="flex items-center gap-2 py-1">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">หรือสร้างผู้ใช้ใหม่</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </div>
        )}

        <form onSubmit={handleCreate} className="mt-4 space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ชื่อของคุณ"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40"
          >
            เริ่มใช้งาน
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">
          ข้อมูลทั้งหมดเก็บไว้ในเครื่องนี้เท่านั้น ไม่มีรหัสผ่านและไม่ส่งขึ้นเซิร์ฟเวอร์
        </p>
      </div>
    </div>
  )
}
