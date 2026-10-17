import { Link } from 'react-router-dom'
import { list } from '../../core/registry/registry.ts'

export function MenuScreen() {
  const games = list()

  return (
    <main className="page">
      <h1>ミニゲーム集</h1>
      <ul className="game-list">
        {games.map((game) => (
          <li key={game.id}>
            <Link className="game-card" to={`/games/${game.id}`}>
              <span className="game-title">{game.title}</span>
              <span className="game-description">{game.description}</span>
              <span className="game-author">つくった人：{game.author}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
