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
import PaymentSuccesful from './pages/payment-successful/payment-successful'
import Wishlist from './pages/wishlist/wishlist'
import Search from './pages/search/search'

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
            <Route path={"/payment-successful"} exact element={<PaymentSuccesful />} />
            <Route path={"/wishlist"} exact element={<Wishlist />} />
            <Route path={"/search"} exact element={<Search />} />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>
    </StoreContextProvider>
  )
}

export default App
