import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

// Hook para hacer uso del contexto
import { useContext } from "react";

// Importamos el contexto
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
    const {cart, addItem} = useContext(CartContext)
    console.log(cart)

    const categorias = detalle.category;

    const onAdd = (cantidad)=>{
        console.log('Cantidad agregada: ' + cantidad)
        addItem(detalle, cantidad)
    }

    return (
        <Card>
            <Row className="g-0">
                <Col md={4}>
                    <Card.Img className="p-5" src={detalle.image} alt={detalle.title} />
                </Col>
                <Col md={8}>
                    <Card.Body className="p-4">
                        <Card.Title>{detalle.title}</Card.Title>
                        <Card.Text>
                            {detalle.description}.
                        </Card.Text>
                        <Card.Text>
                            Precio: ${detalle.price} COP
                        </Card.Text>
                        <Card.Text>
                            
                            Categorías: {Array.isArray(categorias) ? categorias.map((cat)=> <Badge  key={cat} className="m-2">{cat}</Badge>) : <Badge>{categorias}</Badge>}
                            
                        </Card.Text>
                        {/* <Card.Text>
                            {`Calificación: ${detalle.rating.rate ? detalle.rating.rate : '-'}/5 (${detalle.rating.count ? detalle.rating.count : 0} Calificaciones )`}
                        </Card.Text> */}
                        <Card.Text>
                            {`${detalle.stock == 1 ? 'Disponible: ' : 'Disponibles: '} ${detalle.stock}`}
                        </Card.Text>
                        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ItemDetail