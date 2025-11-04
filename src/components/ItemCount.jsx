import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)

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
        setCompra(!compra)
    }

    //a la escucha de un cambio
    useEffect(() => {
        if (compra !== false) {
            console.log('se ejecuta cuando monta el componente y siempre que compra cambie', compra)
        }
    }, [compra])

    return (
        <>
            <div>
                <Button variant='danger' size='sm' onClick={restar} disabled={count === 0}>-</Button>
                <span className='btn'>{count}</span>
                <Button variant='success' size='sm' onClick={sumar} disabled={stock === count}>+</Button>
            </div>
            <Button variant='primary' onClick={ejecutarCompra}>Comprar</Button>
        </>
    )
}

export default ItemCount