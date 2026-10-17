# games/README.md — ゲームを1本足すには

このディレクトリにゲームを1本足すと、トップの一覧に自動で表示されます。
`core/` や `features/` の中身を変える必要はありません。

**完成の目安**

> 自分の作業ブランチを push して、そこで出るプレビュー URL をブラウザで開き、
> 一覧から自分のゲームを選んで最後まで遊べれば完成。
> **main へのマージは含みません**（先生が取り込みます）。

## 守ること

- 作者名は**ニックネーム**にする。本名・学校名・顔写真は入れない
- 自分で作っていない画像・音を使うときは、先に先生に確認し、`docs/credits.md` に出典を書く
- さわってよいのは `src/games/自分のid/` と、`src/games/index.ts` の自分の1行だけ

## 1. コードを書く

`src/games/renda/`（10秒れんだ）をお手本にします。

1. id（英小文字とハイフン。例：`janken`）を決めて、`src/games/自分のid/` フォルダを作る
2. ゲームの画面 `自分のゲーム名Game.tsx` を書く

```tsx
import { useState } from 'react'

export function JankenGame() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count} 回押した</button>
}
```

3. `index.ts` を書いて登録する

```ts
import { register } from '../../core/registry/registry.ts'
import { JankenGame } from './JankenGame.tsx'

register({
  id: 'janken', // フォルダ名と同じにする。他の人と重ならない名前
  title: 'じゃんけん', // 一覧に出る名前
  author: 'ニックネーム', // 本名は書かない
  description: 'ひとこと説明',
  Component: JankenGame,
})
```

4. `src/games/index.ts` に1行足す

```ts
import './janken/index.ts'
```

点数や残り時間など「ルールの計算」があるなら、`rules.ts` に分けてテストを書くと安心です
（`renda/rules.ts` と `renda/rules.test.ts` を参照）。

## 2. 自分のパソコンで確かめる

```bash
npm run dev
```

表示された URL（`http://localhost:5173/`）を開き、一覧に自分のゲームが出て、遊べるか確かめる。

push の前に、チェックがすべて通ることを確かめる。

```bash
npm run test
npm run typecheck
npm run lint
```

## 3. push してプレビュー URL で確かめる

```bash
git checkout -b feature/game-自分のid
git add src/games/自分のid src/games/index.ts
git commit -m "feat: ゲーム「〇〇」を追加"
git push -u origin feature/game-自分のid
```

1. GitHub に出る「Compare & pull request」から PR（変更を取り込んでもらうお願い）を作る
2. PR の画面に Cloudflare がプレビュー URL を書き込むので、それを開く
3. 一覧から自分のゲームを選んで、最後まで遊べることを確かめる

**これができれば完成です。**
