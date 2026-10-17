# Conventions

コードの書き方の約束。**変更には承認が必要。**

## 命名

| 対象 | 規則 | 例 |
|------|------|-----|
| ファイル（画面・部品） | React 部品は PascalCase（大文字始まり）の `.tsx` | `RendaGame.tsx` |
| ファイル（それ以外） | camelCase（小文字始まり）の `.ts` | `registry.ts` |
| import | 相対 import は拡張子（`.ts` / `.tsx`）を書く | `import { register } from '../../core/registry/registry.ts'` |
| ゲームのディレクトリ・id | 英小文字とハイフン。ディレクトリ名と id を同じにする | `src/games/renda/` → `id: 'renda'` |
| 変数・関数 | camelCase | `tapCount`, `startGame()` |
| 型 | PascalCase。`interface` ではなく `type` を使う | `export type MiniGame = { ... }` |
| 定数 | UPPER_SNAKE_CASE（全部大文字＋アンダーバー） | `TIME_LIMIT_SECONDS = 10` |

## 書き方のそろえ方

Prettier で自動でそろえる（セミコロンなし・シングルクォート）。TypingSuite と同じ設定。

## ディレクトリの分け方

`docs/architecture.md` の「ディレクトリ構成」に従う。
自分のゲームで使う画像・音・部品は、すべて `src/games/自分のid/` の中に置く。

## コメント

「何をしているか」ではなく「なぜそうしたか」を書く。
中学生が読んでわかる日本語で書く。

## エラーハンドリング

エラーを握りつぶさない（空の `catch {}` を書かない）。
困ったら `console.error` で出して、画面が止まらないようにする。

## テスト

- 対象ファイルと同じディレクトリに `対象ファイル名.test.ts(x)` として置く
- Vitest を使い、`describe` / `it` で書く
- ゲームの「ルールの計算」（得点・残り時間など）はテストを書く

## 状態を持つロジックの書き方

得点や残り時間の計算など、状態が変わっていくロジックは、
クラスではなく**純粋関数＋変更しない state オブジェクト**で書く。
理由：入力と出力だけでテストでき、React の `useState` / `useReducer` と相性がよいため。
