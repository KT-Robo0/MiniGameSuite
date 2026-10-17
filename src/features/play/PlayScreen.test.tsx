import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { register } from '../../core/registry/registry.ts'
import { PlayScreen } from './PlayScreen.tsx'

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/games/:id" element={<PlayScreen />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('PlayScreen', () => {
  it('登録されたゲームのタイトルと作者と中身を出す', () => {
    register({
      id: 'play-test',
      title: 'プレイテスト',
      author: 'tester',
      description: '',
      Component: () => <p>ゲームの中身</p>,
    })
    renderAt('/games/play-test')
    expect(
      screen.getByRole('heading', { name: 'プレイテスト' }),
    ).toBeInTheDocument()
    expect(screen.getByText('つくった人：tester')).toBeInTheDocument()
    expect(screen.getByText('ゲームの中身')).toBeInTheDocument()
  })

  it('ない id なら「見つかりませんでした」と出す', () => {
    renderAt('/games/no-such-game')
    expect(
      screen.getByText('そのゲームは見つかりませんでした。'),
    ).toBeInTheDocument()
  })
})
