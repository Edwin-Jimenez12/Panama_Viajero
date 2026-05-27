import { Route, Routes } from 'react-router-dom'
import GuideApp from './guide/GuideApp.jsx'
import OfficialApp from './official/OfficialApp.jsx'

function App() {
  return (
    <Routes>
      <Route path="/official/*" element={<OfficialApp />} />
      <Route path="/*" element={<GuideApp />} />
    </Routes>
  )
}

export default App
