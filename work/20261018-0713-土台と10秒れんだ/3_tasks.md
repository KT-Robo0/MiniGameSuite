# 3. Tasks — 土台と「10秒れんだ」を作って公開する

完了したら `- [x]` に消し込む。**全部終わってもファイルは削除せず残す。**

作業中に思いついたスコープ外のことはここに足さない。
`docs/backlog.md` か `docs/known-issues.md` に送る。

- [x] 作業ブランチ `feature/game-renda` を切る
- [x] ひな型を作る（package.json・tsconfig・vite.config・eslint・prettier・index.html）
- [x] `src/core/`：型 `MiniGame` と `register()` / `get()` / `list()`（TypingSuite と同じ名前）、テスト
- [x] `src/features/menu/`：ゲーム一覧画面
- [x] `src/features/play/`：遊ぶ画面の枠（タイトル・作者・一覧へ戻る。見つからない id の表示）
- [x] `src/App.tsx` / `src/main.tsx`：ルーティング（`/` と `/games/:id`）
- [x] `src/games/renda/`：ルールの計算（純粋関数）とテスト
- [x] `src/games/renda/`：画面（スタート → 10秒連打 → 結果 → もう一回）。作者は `Shisho`
- [x] `src/games/index.ts` に renda を登録
- [x] `src/games/README.md`：生徒向けの「ゲームを1本足す手順」
- [x] `wrangler.jsonc` を置く
- [x] `README.md` の「これは何か」「動かし方」を埋める
- [ ] ローカルで動作確認（一覧 → 遊ぶ → 結果 → 戻る、`/games/renda` 直接アクセス）
- [ ] コミットして push し、PR を作る（ユーザーの指示を受けてから）
- [ ] Cloudflare で GitHub リポジトリをつなぐ（先生が操作・Claude が案内）
- [ ] プレビュー URL で動作確認
- [ ] マージ後、本番 URL で PC・スマホから動作確認
- [ ] ラップアップ（`/wrapup` を実行する）

## 品質チェック

- [x] テスト
- [x] 型チェック
- [x] lint
- [x] ビルド
