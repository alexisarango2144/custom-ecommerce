import { useState } from 'react'
import './assets/sass/App.scss'

import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartContainer from './components/CartContainer.jsx'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer title={"Bienvenidos a mi nueva tienda"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<Error code="404" />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
