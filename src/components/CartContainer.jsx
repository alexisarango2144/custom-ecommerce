import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import { CartView } from './CartView'

const CartContainer = () => {
    const {cart} = useContext(CartContext)
    
  return (
    <div className='container'>
        {
        !cart.length
        ? <EmptyCart/>
        : <CartView/>
    }
    </div>
  )
}

export default CartContainer