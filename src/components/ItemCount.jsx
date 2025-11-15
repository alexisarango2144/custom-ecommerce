import { useState, useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
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
                        <Button variant='success' size='sm' onClick={sumar} disabled={stock === count}>+</Button>
                    </InputGroup>
                </div>
                <div className="col-12 col-md-6 text-end">
                    <Button variant='primary' onClick={ejecutarCompra} disabled={count === 0 || stock === 0}>Agregar al carrito</Button>
                </div>
            </div>

        </>
    )
}

export default ItemCount