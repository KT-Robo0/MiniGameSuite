import { Link, useParams } from 'react-router-dom'
import { get } from '../../core/registry/registry.ts'

export function PlayScreen() {
  const { id } = useParams()
  const game = id ? get(id) : undefined

  if (!game) {
    return (
      <main className="page">
        <p>そのゲームは見つかりませんでした。</p>
        <Link to="/">一覧へ戻る</Link>
      </main>
    )
  }

  const { Component } = game
  return (
    <main className="page">
      <Link to="/">← 一覧へ戻る</Link>
      <h1>{game.title}</h1>
      <p className="game-author">つくった人：{game.author}</p>
      {/* key を付けると、別のゲームに移ったときに状態がリセットされる */}
      <Component key={game.id} />
    </main>
  )
}
