import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/home/home'
import Topbar from './components/topbar/topbar'

function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
