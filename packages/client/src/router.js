import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/landing-page'
import GamePage from './pages/game-page/game-page'
import LegalNoticePage from './pages/legal-notice-page/legal-notice-page'

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/legal-notice' element={<LegalNoticePage />} />
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
