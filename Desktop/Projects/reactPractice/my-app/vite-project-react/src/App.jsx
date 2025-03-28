import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Navbar from "./components/Navbar"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App