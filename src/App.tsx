import { Route, Routes } from 'react-router-dom'
import { MenuScreen } from './features/menu/MenuScreen.tsx'
import { PlayScreen } from './features/play/PlayScreen.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuScreen />} />
      <Route path="/games/:id" element={<PlayScreen />} />
    </Routes>
  )
}

export default App
