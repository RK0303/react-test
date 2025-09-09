import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import ProductDetails from './product/ProductDetails'
import CartPage from './cart/CartPage'
import NavBar from '../component/navbar/NavBar'

const MainApp = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainApp