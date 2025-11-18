import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { TiDelete } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { formatCOP } from '../hooks/formatCOP'

export const CartView = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext)

    const totalPagar = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <Container className='text-center'>
            <h1>Tu carrito</h1>

            <div className='container'>
                {
                    cart.map((item) => (
                        <div className='card m-2 p-2 w-100' key={item.id}>
                            <div className="row">
                                <div className="col-12 col-lg-3 align-content-center">
                                    <Link to={`/item/${item.id}`}>
                                        <img src={item.image} alt={item.description} style={{ maxWidth: '150px', border: '12px' }} />
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-9 text-start">
                                    <div className="row mb-1">
                                        <span className='text-center d-block fs-5'>{item.title}</span>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <span><b>Precio:</b> {formatCOP(item.price)} COP </span>
                                            <div className="row">
                                                <span style={{ fontSize: '1.25rem' }}>Subtotal: {formatCOP(item.quantity * item.price)}</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <span><b>Cantidad:</b> {item.quantity}</span>
                                        </div>
                                        <div className="col-2 text-center align-content-center">
                                            <Button variant='danger' onClick={() => removeItem(item)}><TiDelete /></Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="m-2 p-2 text-end">
                    <span style={{fontSize: '1.25rem'}}><b>Total a pagar:</b> {formatCOP(totalPagar)} COP</span>
                </div>
                <div className="text-end">
                    <Button variant='danger' className='me-3' onClick={()=> clearCart()}>Vaciar carrito</Button>
                    <Button variant='success' >Finalizar compra</Button>
                </div>

            </div>

        </Container>
    )
}
