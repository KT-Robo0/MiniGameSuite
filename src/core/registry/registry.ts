import type { MiniGame } from '../types/game.ts'

const games = new Map<string, MiniGame>()

export function register(game: MiniGame): void {
  if (games.has(game.id)) {
    throw new Error(`既に登録済みの id です: ${game.id}`)
  }
  games.set(game.id, game)
}

export function get(id: string): MiniGame | undefined {
  return games.get(id)
}

export function list(): MiniGame[] {
  return Array.from(games.values())
}
