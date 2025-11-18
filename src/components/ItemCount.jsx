import { useState, useEffect, useContext } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

const ItemCount = ({ item, onAdd }) => {
    const [count, setCount] = useState(1)
    const {cart, addItem, isInCart} = useContext(CartContext)

    const sumar = () => {
        if (count < item.stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const ejecutarCompra = () => {
        onAdd(count)
    }

    return (
        <>
            <div className='row justify-content-start'>
                <div className="col-12 col-md-6">
                    <InputGroup className='mb-2'>
                        <Button variant='danger' size='sm' onClick={restar} disabled={count === 0}>-</Button>
                        <span className='btn disabled'>{count}</span>
                        <Button variant='success' size='sm' onClick={sumar} disabled={item.stock === count}>+</Button>
                    </InputGroup>
                </div>
                <div className="col-12 col-md-6 text-end">
                    <Button variant='primary' onClick={ejecutarCompra} disabled={count === 0 || item.stock === 0}>Agregar al carrito</Button>
                </div>
            </div>

        </>
    )
}

export default ItemCount