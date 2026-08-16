const EXT_BY_LANG: Record<string, string> = {
  python: 'solution.py',
  pseudocode: 'pseudo.txt',
}

export default function CodeBlock({ code, lang = 'python' }: { code: string; lang?: string }) {
  const lines = code.split('\n')
  const filename = EXT_BY_LANG[lang] ?? 'code.txt'

  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="ml-2 rounded-t-md border-b-2 border-indigo-400 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-300">
          {filename}
        </span>
      </div>
      <div className="overflow-x-auto">
        <pre className="min-w-full px-1 py-3 font-mono text-[13px] leading-relaxed text-slate-100">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-9 shrink-0 select-none pr-3 text-right text-slate-600">{i + 1}</span>
              <span className="whitespace-pre">{line || ' '}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}
