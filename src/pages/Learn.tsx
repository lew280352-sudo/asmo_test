import { Link } from 'react-router-dom'
import { LESSONS } from '../data/lessons'

export default function Learn() {
  return (
    <div className="space-y-5">
      <div>
        <Link to="/" className="text-sm text-indigo-600 hover:underline">
          ← กลับหน้าแรก
        </Link>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">สูตรและเนื้อหาที่ต้องรู้</h2>
        <p className="mt-1 text-sm text-slate-500">
          รวมสูตรและหลักการทุกหัวข้อที่ใช้ในข้อสอบ ASMO คณิต ม.4-ม.6 แตะหัวข้อเพื่อเปิด/ปิดดูรายละเอียด
        </p>
      </div>

      <div className="space-y-3">
        {LESSONS.map((section) => (
          <details
            key={section.id}
            className="group rounded-xl border border-slate-200 bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5">
              <div className="min-w-0">
                <h3 className="font-medium text-slate-900">{section.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{section.summary}</p>
              </div>
              <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="space-y-3 border-t border-slate-100 px-4 py-4">
              {section.formulas.map((f) => (
                <div key={f.name} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-sm font-medium text-slate-800">{f.name}</p>
                  <p className="mt-1 overflow-x-auto whitespace-pre-wrap break-words font-mono text-sm text-indigo-700">
                    {f.formula}
                  </p>
                  {f.note && <p className="mt-1 text-xs text-slate-500">{f.note}</p>}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
