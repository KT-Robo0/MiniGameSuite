import { get, list, register } from './registry.ts'

const Dummy = () => null

describe('registry', () => {
  it('登録したゲームを id で取り出せ、一覧にも出る', () => {
    register({
      id: 'test-a',
      title: 'テストA',
      author: 'tester',
      description: '',
      Component: Dummy,
    })
    expect(get('test-a')?.title).toBe('テストA')
    expect(list().map((game) => game.id)).toContain('test-a')
  })

  it('同じ id を2回登録するとエラーになる', () => {
    const game = {
      id: 'test-b',
      title: 'テストB',
      author: 'tester',
      description: '',
      Component: Dummy,
    }
    register(game)
    expect(() => register(game)).toThrow('test-b')
  })

  it('登録されていない id は undefined になる', () => {
    expect(get('no-such-game')).toBeUndefined()
  })
})
