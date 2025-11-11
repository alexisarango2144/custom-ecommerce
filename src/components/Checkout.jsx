import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const [buyer, setBuyer] = useState({})
const [orderId, setOrderId] = useState({})

const Checkout = () => {
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault();

        let order = {
            comprador: buyer,
            compras: CartContext,
            total: total(),
            fecha: serverTimestamp()
        }

        const ventas = collection(db, "orders")


    }

    return (
        <div>
            <h1>Por favor diligencie sus datos</h1>
            <Form onSubmit={finalizarCompra}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}