import { register } from '../../core/registry/registry.ts'
import { RendaGame } from './RendaGame.tsx'

register({
  id: 'renda',
  title: '10秒れんだ',
  author: 'Shisho',
  description: '10秒間にボタンを何回押せるかな？',
  Component: RendaGame,
})
