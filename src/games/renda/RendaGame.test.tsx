import { act, fireEvent, render, screen } from '@testing-library/react'
import { RendaGame } from './RendaGame.tsx'

describe('RendaGame', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('スタート → 3回押す → 10秒たつと結果が出て、もう一回で遊び直せる', () => {
    render(<RendaGame />)

    fireEvent.click(screen.getByRole('button', { name: 'スタート' }))
    const tapButton = screen.getByRole('button', { name: 'おす！' })
    fireEvent.click(tapButton)
    fireEvent.click(tapButton)
    fireEvent.click(tapButton)
    expect(screen.getByText('3 回')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(10_100)
    })
    expect(screen.getByText('おしまい！')).toBeInTheDocument()
    expect(screen.getByText('3 回')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'もう一回' }))
    expect(screen.getByText('0 回')).toBeInTheDocument()
  })
})
