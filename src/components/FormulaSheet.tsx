import { LESSONS } from '../data/lessons'

export default function FormulaSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-[70vh] flex-col overflow-hidden rounded-t-2xl border-t border-slate-200 bg-slate-50 shadow-2xl">
      <div className="flex justify-center pt-1.5">
        <div className="h-1 w-10 rounded-full bg-slate-300" />
      </div>
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2.5">
        <span className="text-sm font-semibold text-slate-900">สูตรและเนื้อหาที่ต้องรู้</span>
        <button onClick={onClose} className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">
          ปิด
        </button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        {LESSONS.map((section) => (
          <details key={section.id} className="group rounded-xl border border-slate-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3">
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-slate-900">{section.title}</h3>
                <p className="mt-0.5 text-xs text-slate-500">{section.summary}</p>
              </div>
              <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="space-y-2 border-t border-slate-100 px-3 py-3">
              {section.formulas.map((f) => (
                <div key={f.name} className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-xs font-medium text-slate-800">{f.name}</p>
                  <p className="mt-1 overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs text-indigo-700">
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
