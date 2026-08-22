import { useEffect, useRef, useState } from 'react'

type Tool = 'pen' | 'eraser'

const MIN_HEIGHT = 200
const EDGE_MARGIN = 80

export default function Scratchpad({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const drawingRef = useRef(false)
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  const resizeRef = useRef<{ startY: number; startHeight: number } | null>(null)
  const [tool, setTool] = useState<Tool>('pen')
  const [height, setHeight] = useState(0)

  function setupCanvas(preserveContent: boolean) {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    const applySize = () => {
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.scale(dpr, dpr)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctxRef.current = ctx
    }

    if (preserveContent && ctxRef.current) {
      const snapshot = canvas.toDataURL()
      const img = new Image()
      img.onload = () => {
        applySize()
        ctxRef.current?.drawImage(img, 0, 0, rect.width, rect.height)
      }
      img.src = snapshot
    } else {
      applySize()
    }
  }

  useEffect(() => {
    if (!isOpen) return
    setHeight(Math.round(Math.min(window.innerHeight * 0.5, window.innerHeight - EDGE_MARGIN - 60)))
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const id = requestAnimationFrame(() => setupCanvas(false))
    return () => cancelAnimationFrame(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  function handleResizeStart(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId)
    resizeRef.current = { startY: e.clientY, startHeight: height }
  }

  function handleResizeMove(e: React.PointerEvent) {
    if (!resizeRef.current) return
    const delta = resizeRef.current.startY - e.clientY
    const maxHeight = window.innerHeight - EDGE_MARGIN
    const next = Math.min(maxHeight, Math.max(MIN_HEIGHT, resizeRef.current.startHeight + delta))
    setHeight(next)
  }

  function handleResizeEnd() {
    if (!resizeRef.current) return
    resizeRef.current = null
    requestAnimationFrame(() => setupCanvas(true))
  }

  function getPoint(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.currentTarget.setPointerCapture(e.pointerId)
    drawingRef.current = true
    lastPointRef.current = getPoint(e)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return
    const ctx = ctxRef.current
    const last = lastPointRef.current
    if (!ctx || !last) return
    const point = getPoint(e)
    ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over'
    ctx.strokeStyle = '#1e293b'
    ctx.lineWidth = tool === 'eraser' ? 20 : 2.5
    ctx.beginPath()
    ctx.moveTo(last.x, last.y)
    ctx.lineTo(point.x, point.y)
    ctx.stroke()
    lastPointRef.current = point
  }

  function handlePointerUp() {
    drawingRef.current = false
    lastPointRef.current = null
  }

  function clearCanvas() {
    const canvas = canvasRef.current
    const ctx = ctxRef.current
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex flex-col overflow-hidden rounded-t-2xl border-t border-slate-200 bg-slate-50 shadow-2xl"
      style={{ height: height || '50vh' }}
    >
      <div
        onPointerDown={handleResizeStart}
        onPointerMove={handleResizeMove}
        onPointerUp={handleResizeEnd}
        className="flex shrink-0 cursor-ns-resize touch-none justify-center py-2"
      >
        <div className="h-1.5 w-12 rounded-full bg-slate-300" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-2.5">
        <span className="text-sm font-semibold text-slate-900">กระดาษทด</span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setTool('pen')}
            className={
              'rounded-lg px-3 py-1.5 text-sm font-medium ' +
              (tool === 'pen' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600')
            }
          >
            ปากกา
          </button>
          <button
            onClick={() => setTool('eraser')}
            className={
              'rounded-lg px-3 py-1.5 text-sm font-medium ' +
              (tool === 'eraser' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600')
            }
          >
            ยางลบ
          </button>
          <button
            onClick={clearCanvas}
            className="rounded-lg bg-rose-100 px-3 py-1.5 text-sm font-medium text-rose-700"
          >
            ล้างทั้งหมด
          </button>
          <button onClick={onClose} className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">
            ปิด
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="flex-1 touch-none bg-white"
      />
    </div>
  )
}
