import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './context/cartContext'

// Components
import Topbar from './components/topbar/topbar'
import Footer from './components/footer/footer'

// Pages
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/checkout'
import WishlistContextProvider from './context/wishlistContext'

function App() {

  return (
    <CartContextProvider>
      <WishlistContextProvider>
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path={"/"} exact element={<Home />} />
            <Route path={"/cart"} exact element={<Cart />} />
            <Route path={"/checkout"} exact element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WishlistContextProvider>
    </CartContextProvider>
  )
}

export default App
