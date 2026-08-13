import { TRACKS } from '../data/tracks'
import { setActiveTrackId } from '../lib/track'
import type { Track } from '../data/tracks'

export default function TrackSelect({ profileId, onSelect }: { profileId: string; onSelect: (track: Track) => void }) {
  function handlePick(track: Track) {
    setActiveTrackId(profileId, track.id)
    onSelect(track)
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="text-center">
          <h1 className="text-lg font-semibold text-indigo-600">ติวเข้มโอลิมปิก</h1>
          <p className="mt-1 text-sm text-slate-500">อยากฝึกทำข้อสอบสนามไหน?</p>
        </div>

        <div className="space-y-3">
          {TRACKS.map((track) => (
            <button
              key={track.id}
              onClick={() => handlePick(track)}
              className="block w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-300 hover:shadow-md"
            >
              <h2 className="text-base font-semibold text-slate-900">{track.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{track.description}</p>
              {track.subjects && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {track.subjects.map((s) => (
                    <span key={s} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400">สลับสนามสอบภายหลังได้จากเมนูด้านบน</p>
      </div>
    </div>
  )
}
