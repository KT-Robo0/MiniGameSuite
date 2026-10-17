// 「10秒れんだ」のルールの計算。画面とは分けておくと、テストで確かめやすい

export const TIME_LIMIT_SECONDS = 10

export type RendaState = {
  phase: 'ready' | 'playing' | 'finished' // スタート前 / 遊んでいる / 終わった
  count: number // 押した回数
  startedAt: number | null // スタートした時刻（ミリ秒）
}

export function createState(): RendaState {
  return { phase: 'ready', count: 0, startedAt: null }
}

export function start(now: number): RendaState {
  return { phase: 'playing', count: 0, startedAt: now }
}

// 残り時間（秒）。0 より小さくはならない
export function remainingSeconds(state: RendaState, now: number): number {
  if (state.startedAt === null) return TIME_LIMIT_SECONDS
  const elapsed = (now - state.startedAt) / 1000
  return Math.max(0, TIME_LIMIT_SECONDS - elapsed)
}

// 時間切れなら終わりにする。画面は定期的にこれを呼ぶ
export function update(state: RendaState, now: number): RendaState {
  if (state.phase === 'playing' && remainingSeconds(state, now) === 0) {
    return { ...state, phase: 'finished' }
  }
  return state
}

// ボタンを1回押した。時間切れのあとに押しても数えない
export function tap(state: RendaState, now: number): RendaState {
  const current = update(state, now)
  if (current.phase !== 'playing') return current
  return { ...current, count: current.count + 1 }
}
