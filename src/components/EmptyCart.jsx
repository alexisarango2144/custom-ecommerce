import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='text-center my-5'>
        <img src="https://i.postimg.cc/13RRbMZy/image.png" alt="Empty cart" style={{maxHeight: '250px', maxWidth: '90%'}} />
        <h1 className='mb-5'>Tu carrito está vacío</h1>
        <Button as={Link} to={'/'} variant='primary'>Vamos a comprar</Button>
    </div>
  )
}

export default EmptyCart