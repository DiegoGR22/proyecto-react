/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Card, Col, Container, FloatingLabel, Form, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTrash, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css"
import emptyCartImg from "/assets/img/empty-cart.png";

const CartContainer = () => {

    const { cart, clearAll, totalPrice } = useContext(CartContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const discountCode = formData.get('codigo');
        if (discountCode.trim() === '') {
            return;
        }
        toast.success('Código de descuento aplicado correctamente: ' + discountCode)
        return;
    };

    return (
        <>
            {
                cart.length > 0 ?
                    <>
                        <section className="w-100 px-3 py-5" style={{ backgroundColor: '#eee', borderRadius: '.5rem .5rem 0 0' }}>
                            <Row className="d-flex justify-content-center">
                                <Col xl={11}>

                                    <Link to={"/"} className="icon-link icon-link-hover mb-4">
                                        <FontAwesomeIcon icon={faArrowCircleLeft} className="icon" />
                                        Seguir Comprando
                                    </Link>

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h2 className="fw-700 text-uppercase mb-0 text-black">Shopping Cart</h2>
                                        <div>
                                            <p className="mb-0"><span className="text-muted">Sort by:</span> <Link href="#!" className="text-body">price <FontAwesomeIcon className="fs-6" icon={faAngleDown}></FontAwesomeIcon></Link></p>
                                        </div>
                                    </div>

                                    {
                                        cart.map((item) => (
                                            <div key={item.id}>
                                                <CartList item={item} />
                                            </div>
                                        ))
                                    }

                                    <div className="d-flex justify-content-between mb-4">
                                        <Button className="btn-lg" variant="danger" onClick={clearAll}>Vaciar Carrito <span><FontAwesomeIcon icon={faTrash} /></span></Button>
                                        <h3 className="text-end fw-bold">Order Total: ${totalPrice}.00</h3>
                                    </div>

                                    <Card className="mb-4">
                                        <Card.Body className="p-4 d-flex flex-row">
                                            <Form className="w-100 d-flex align-items-center m-0" onSubmit={handleSubmit}>
                                                <div className="d-flex w-100">
                                                    <FloatingLabel className="text-muted w-100" controlId="form1" label="¿Tienes un código de descuento?">
                                                        <Form.Control type="text" id="form1" name="codigo" placeholder="Ingresa tu código de descuento" />
                                                    </FloatingLabel>
                                                </div>
                                                <Button variant="outline-warning" type="submit" className="text-uppercase btn-lg ms-3">Apply</Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body className="p-4">
                                            <Link to="/cart/checkout">
                                                <Button type="button" variant="outline-warning" className="w-100 text-uppercase btn-lg">Proceed to Pay</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                        </section>
                        <ToastContainer
                            position="bottom-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </>
                    :
                    <>

                        <Container className="text-center mt-5">
                            <Row>
                                <Col>
                                    <Image style={{ width: '150px' }} src={emptyCartImg} alt="Empty Cart" fluid className="mb-4" />
                                    <h2 className="mt-4 fw-bold">Tu carrito está vacío</h2>
                                    <p>¡Agrega algunos productos para comenzar!</p>
                                    {/* <Link to="/" className="btn btn-primary btn-lg mt-2">Seguir Comprando</Link> */}
                                    <Button variant="outline-primary">
                                        <Link to={"/"} className="icon-link icon-link-hover-empty">
                                            <FontAwesomeIcon icon={faArrowCircleLeft} className="icon-empty" />
                                            Seguir Comprando
                                        </Link>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </>
            }
        </>
    )
}

export default CartContainer
