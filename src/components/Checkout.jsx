import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { db } from "../services/firebase/firebase";
import SwalToast from "./SwalToast";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import LoaderComponent from "./LoaderComponent";

const Checkout = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        lastName: '',
        cityAddress: '',
        address: '',
        email: '',
        emailConfirm: '',
        phone: ''
    });
    const [orderId, setOrderId] = useState(null)
    const [validated, setValidated] = useState(false)
    const [loader, setLoader] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const emailIsConfirmed = buyer.email !== '' && buyer.email === buyer.emailConfirm;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer(prevBuyer => ({
            ...prevBuyer,
            [name]: value
        }));
    };

    const handleCompra = (e) => {
        e.preventDefault();

        // Limpiamos los datos del comprador
        const trimmedBuyer = {};
        Object.keys(buyer).forEach(key => {
            const value = buyer[key];
            trimmedBuyer[key] = typeof value === 'string' ? value.trim() : value;
        });

        // Actualizar el estado para que la UI refleje los datos limpios
        setBuyer(trimmedBuyer);

        const form = e.currentTarget;
        setValidated(true);

        if (form.checkValidity() === false || (trimmedBuyer.email !== trimmedBuyer.emailConfirm)) {
            e.stopPropagation();
            return;
        }
        finalizarCompra(trimmedBuyer);
    };

    const finalizarCompra = (finalBuyerData) => {
        setLoader(true)

        let order = {
            costumer: finalBuyerData,
            products: cart,
            total: total(),
            date: serverTimestamp()
        }

        const ventas = collection(db, "orders")
        // Agregar la orden
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                SwalToast({
                    icon: 'success',
                    title: 'Compra registrada con éxito!',
                    content: `Su número de orden es: ${res.id}`,
                    timer: 10000
                })
                clearCart(false)
            })
            .catch((error) => {
                SwalToast({
                    icon: 'error',
                    title: 'Ocurrió un error al registrar la compra.',
                    content: `${error.message}`,
                    timer: 10000
                })
            })
            .finally(() => {
                setLoader(false)
            })
    }

    if (loader) return <LoaderComponent />;

    return (
        <Container className="text-center my-4">
            {
                cart.length === 0 && !orderId
                    ? <EmptyCart />
                    : orderId
                        ? <Row className="py-5 justify-content-center">
                            <Col>
                                <h2>Gracias por su compra!</h2>
                                <p>Su número de orden es: <b>{orderId}</b></p>
                                <Button as={Link} to='/' variant='primary'>
                                    Volver al inicio
                                </Button>
                            </Col>
                        </Row>
                        : <div>
                            <h1>Registrar compra</h1>
                            <h2>Por favor diligencie sus datos</h2>
                            <Form noValidate validated={validated} onSubmit={handleCompra} className="text-start my-4">
                                <Row className="mb-3">
                                    <Col xs='12' lg='6'>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Nombres</Form.Label>
                                            <Form.Control type="text" placeholder="Nombres" name="name" value={buyer.name} required onChange={handleInputChange} />
                                            <Form.Control.Feedback type="invalid">
                                                El nombre es requerido.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Apellidos</Form.Label>
                                            <Form.Control type="text" placeholder="Apellidos" name="lastName" value={buyer.lastName} required onChange={handleInputChange} />
                                            <Form.Control.Feedback type="invalid">
                                                El apellido es requerido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs='12' lg='6'>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Ciudad</Form.Label>
                                            <Form.Control type="text" placeholder="Ciudad" name="cityAddress" value={buyer.cityAddress} required onChange={handleInputChange} />
                                            <Form.Control.Feedback type="invalid">
                                                La ciudad es requerida.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs='12' lg='6'>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control type="text" placeholder="Dirección" name="address" value={buyer.address} required onChange={handleInputChange} />
                                            <Form.Control.Feedback type="invalid">
                                                La dirección requerida.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs='12' lg='4'>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" value={buyer.email} required onChange={handleInputChange} />
                                            <Form.Text className="text-muted">
                                                Nunca compartiremos tu correo con nadie más.
                                            </Form.Text>
                                            <Form.Control.Feedback type="invalid">
                                                Ingrese un correo electrónico válido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs='12' lg='4'>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Confirme su correo</Form.Label>
                                            <Form.Control type="email" placeholder="Confirme su correo" name="emailConfirm" value={buyer.emailConfirm} required isInvalid={validated && !emailIsConfirmed} onChange={handleInputChange} />
                                            {validated && buyer.emailConfirm &&
                                                <Form.Text className={emailIsConfirmed ? "text-success" : "text-danger"}>
                                                    {emailIsConfirmed ? "Los campos coinciden" : "Los campos no coinciden"}
                                                </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs='12' lg='4'>
                                        <Form.Group className="mb-3" controlId="formBasicPhone">
                                            <Form.Label>Teléfono</Form.Label>
                                            <Form.Control type="text" placeholder="Teléfono" name="phone" value={buyer.phone} required onChange={handleInputChange} />
                                            <Form.Control.Feedback type="invalid">
                                                El teléfono o celular es requerido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col className='text-center'>
                                        <Button variant="success" type="submit">
                                            Finalizar compra
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
            }
        </Container >
    )
}

export default Checkout;