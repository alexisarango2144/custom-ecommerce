import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <Card className='mx-auto mb-3' style={{ width: '18rem'}}>
            <Card.Img className='px-4 mt-3' style={{maxHeight: '250px'}} src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    ${product.price} COP
                </Card.Text>
                <Link className="btn btn-dark" to={`/item/${product.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    )
}

export default Item