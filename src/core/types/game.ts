import type { ComponentType } from 'react'

// ミニゲーム1本を表す型。ゲームを作る人はこの形のオブジェクトを1つ書いて登録する
export type MiniGame = {
  id: string // URL になる（/games/<id>）。英小文字とハイフン。ディレクトリ名と同じにする
  title: string // 一覧に出す名前
  author: string // 作者のニックネーム（本名は書かない）
  description: string // ひとこと説明
  Component: ComponentType // ゲーム本体の画面
}
