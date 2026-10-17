# 1. Requirements — 土台と「10秒れんだ」を作って公開する

## 目的

ミニゲーム集の土台（一覧画面・ゲームの登録の仕組み）と、最初のゲーム「10秒れんだ」を作り、
インターネット上の URL で誰でも遊べる状態にする。

## やること

- プロジェクトのひな型を作る（TypeScript + React + Vite。テスト・型チェック・lint・Prettier も TypingSuite と同じ設定）
- 土台を作る
  - `src/core/`：ゲームの型 `MiniGame` と、登録の仕組み `register()`
  - `src/features/menu/`：登録されたゲームの一覧（トップ画面 `/`）
  - `src/features/play/`：ゲームを遊ぶ画面の枠（`/games/<id>`。タイトルと「一覧へ戻る」）
- ゲーム「10秒れんだ」を作る（`src/games/renda/`）
  - 「スタート」を押すと10秒のカウントダウンが始まる
  - 時間内に大きなボタンを押した回数を数え、残り時間を表示する
  - 10秒たったらボタンが押せなくなり、結果（押した回数）を出す。「もう一回」で最初から遊べる
  - 回数と残り時間の計算は純粋関数にしてテストを書く
- 生徒向けの手順書 `src/games/README.md` を作る（ゲームを1本足す手順）
- 公開の設定をする
  - `wrangler.jsonc` を置く（`name: minigamesuite`、SPA 設定あり）
  - Cloudflare の管理画面で GitHub リポジトリをつなぐ（先生が操作。手順は Claude が案内する）
- `README.md` の「これは何か」「動かし方」を埋める

## 受け入れ条件

- [ ] `npm run test` / `npm run typecheck` / `npm run lint` / `npm run build` がすべてエラーなしで通る
- [ ] ローカル（`npm run dev`）で、一覧から「10秒れんだ」を選び、最後まで遊んで結果が出る
- [ ] `/games/renda` の URL を直接開いても 404 にならない
- [ ] 作業ブランチを push すると、Cloudflare のプレビュー URL で動作を確認できる
- [ ] main にマージしたあと、本番 URL（`https://minigamesuite.saito-kodomopg.workers.dev/`）で PC から遊べる
- [ ] 本番 URL をスマホで開き、タップで遊べる（スマホでの確認は先生か生徒の端末で行う）
- [ ] ゲーム内・コード・コミットに本名などの個人情報が入っていない

## やらないこと（スコープ外）

- 記録・ランキングの保存、ログイン
- 効果音・画像などの素材（使う場合は別の作業で、`docs/credits.md` とあわせて行う）
- 2本目以降のゲーム
- GitHub の main 保護設定（必要なら backlog で検討）

## 関連

- `docs/backlog.md` の項目：なし
- `docs/known-issues.md` の No：なし
