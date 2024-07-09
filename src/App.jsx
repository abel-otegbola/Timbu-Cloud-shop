import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './context/cartContext'

// Components
import Topbar from './components/topbar/topbar'
import Footer from './components/footer/footer'

// Pages
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/checkout'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/cart"} exact element={<Cart />} />
          <Route path={"/checkout"} exact element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
