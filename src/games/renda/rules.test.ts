import { createState, remainingSeconds, start, tap, update } from './rules.ts'

describe('10秒れんだのルール', () => {
  it('スタート前は押しても数えない', () => {
    const state = tap(createState(), 0)
    expect(state.count).toBe(0)
    expect(state.phase).toBe('ready')
  })

  it('スタート後に押すと1ずつ増える', () => {
    let state = start(0)
    state = tap(state, 1000)
    state = tap(state, 2000)
    expect(state.count).toBe(2)
  })

  it('残り時間は10秒から減り、0 より小さくならない', () => {
    const state = start(0)
    expect(remainingSeconds(state, 0)).toBe(10)
    expect(remainingSeconds(state, 3500)).toBe(6.5)
    expect(remainingSeconds(state, 99999)).toBe(0)
  })

  it('10秒たつと終わり、それ以降は数えない', () => {
    let state = tap(start(0), 9999)
    state = update(state, 10000)
    expect(state.phase).toBe('finished')
    state = tap(state, 10001)
    expect(state.count).toBe(1)
  })

  it('update を呼ぶ前でも、時間切れのあとに押した分は数えない', () => {
    const state = tap(start(0), 10500)
    expect(state.count).toBe(0)
    expect(state.phase).toBe('finished')
  })
})
