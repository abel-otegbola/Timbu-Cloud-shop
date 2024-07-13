import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreContextProvider from './context/storeContext'

// Components
import Topbar from './components/topbar/topbar'
import Footer from './components/footer/footer'

// Pages
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/checkout'
import Product from './pages/product/product'

function App() {

  return (
    <StoreContextProvider>
        <BrowserRouter>
          <div className="max-w-[1840px] mx-auto">
          <Topbar />
          <Routes>
            <Route path={"/"} exact element={<Home />} />
            <Route path={"/cart"} exact element={<Cart />} />
            <Route path={"/checkout"} exact element={<Checkout />} />
            <Route path={"/product/*"} exact element={<Product />} />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>
    </StoreContextProvider>
  )
}

export default App
