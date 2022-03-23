import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  Checkout,
  CartPage,
} from './pages/index'
import { Navbar, Sidebar, Footer } from './components/index'

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  )
}

const Wrapper = styled.main``

export default App
