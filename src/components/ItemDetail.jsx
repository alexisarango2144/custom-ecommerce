import React, { useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

// Hook para hacer uso del contexto
import { useContext } from "react";

// Importamos el contexto
import { CartContext } from "../context/CartContext";
import { formatCOP } from "../hooks/formatCOP";

const ItemDetail = ({ detalle }) => {
    const {cart, addItem, currentQuantity} = useContext(CartContext)
    
    // Haremos el render condicional de los botones de compra únicamente cuando se agregue todo el stock
    const [quantityAdded, setQuantityAdded] = useState(currentQuantity(detalle))
    let currentQuantityInCart = currentQuantity(detalle)

    const categorias = detalle.category;

    const onAdd = (cantidad)=>{
        addItem(detalle, cantidad)
        setQuantityAdded((currentQuantityInCart + cantidad) > detalle.stock ? detalle.stock : currentQuantityInCart + cantidad)
    }

    const stockAvailable = detalle.stock - currentQuantityInCart;

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
                            Precio: {formatCOP(detalle.price)} COP
                        </Card.Text>
                        <Card.Text>
                            
                            Categorías: {Array.isArray(categorias) ? categorias.map((cat)=> <Badge as={Link} to={`/category/${cat}`} key={cat} className="m-2 bg-info text-capitalize">{cat}</Badge>) : <Badge className="bg-info text-capitalize">{categorias}</Badge>}
                            
                        </Card.Text>
                        {/* <Card.Text>
                            {`Calificación: ${detalle.rating.rate ? detalle.rating.rate : '-'}/5 (${detalle.rating.count ? detalle.rating.count : 0} Calificaciones )`}
                        </Card.Text> */}
                        <Card.Text>
                            {`${stockAvailable == 1 ? 'Disponible: ' : 'Disponibles: '} ${stockAvailable}`}
                        </Card.Text>
                        {
                        detalle.stock > 0 ?
                            currentQuantityInCart !== detalle.stock 
                                ? 
                                    <ItemCount item={detalle} onAdd={onAdd}>
                                        {currentQuantityInCart > 0 &&
                                            <Card.Text className="text-success">
                                                ¡Has agregado {quantityAdded}  a tu carrito!
                                            </Card.Text>
                                        }
                                    </ItemCount>
                                    
                                : <div>
                                    <Card.Text className="text-success">
                                        ¡Has agregado el máximo disponible de este producto a tu carrito!
                                    </Card.Text>
                                    <Button variant="primary" as={Link} to={'/'} className="me-2">
                                        Explorar más productos
                                    </Button> 
                                    <Button variant="success" as={Link} to={'/cart'}>
                                        Finalizar compra
                                    </Button>
                                </div>
                            :<div><Card.Text className="text-danger">
                                    ¡Lo sentimos, no hay stock disponible para este producto!
                                </Card.Text>
                                <Button variant="primary" as={Link} to={'/'} className="me-2">
                                    Explorar más productos
                                </Button> 
                            </div>
                        }
                        
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ItemDetail