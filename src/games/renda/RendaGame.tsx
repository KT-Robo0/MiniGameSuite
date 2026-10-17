import { useEffect, useState } from 'react'
import './RendaGame.css'
import {
  TIME_LIMIT_SECONDS,
  createState,
  remainingSeconds,
  start,
  tap,
  update,
} from './rules.ts'

export function RendaGame() {
  const [state, setState] = useState(createState)
  const [now, setNow] = useState(() => Date.now())

  // 遊んでいる間だけ、0.1秒ごとに時計を進めて残り時間を表示し直す
  useEffect(() => {
    if (state.phase !== 'playing') return
    const timer = setInterval(() => {
      const time = Date.now()
      setNow(time)
      setState((current) => update(current, time))
    }, 100)
    return () => clearInterval(timer)
  }, [state.phase])

  function handleStart() {
    const time = Date.now()
    setNow(time)
    setState(start(time))
  }

  function handleTap() {
    setState((current) => tap(current, Date.now()))
  }

  if (state.phase === 'ready') {
    return (
      <div className="renda">
        <p>{TIME_LIMIT_SECONDS}秒間に、ボタンを何回押せるかな？</p>
        <button className="renda-start" onClick={handleStart}>
          スタート
        </button>
      </div>
    )
  }

  if (state.phase === 'finished') {
    return (
      <div className="renda">
        <p>おしまい！</p>
        <p className="renda-result">{state.count} 回</p>
        <button className="renda-start" onClick={handleStart}>
          もう一回
        </button>
      </div>
    )
  }

  return (
    <div className="renda">
      <p>のこり {remainingSeconds(state, now).toFixed(1)} 秒</p>
      <p className="renda-count">{state.count} 回</p>
      <button className="renda-tap" onClick={handleTap}>
        おす！
      </button>
    </div>
  )
}
