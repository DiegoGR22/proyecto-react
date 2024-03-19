/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, ButtonGroup, Image, Col, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./Cart.css";

const CartList = ({ item }) => {

    const { removeItem, updateCantCart, getRandomInt } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(item.quantity);
    const [sizeCount, setSizeCount] = useState(getRandomInt(25, 28));

    const handleRestar = (item) => {
        if (cantidad > 1) {
            const newCantidad = cantidad - 1;
            updateCantCart(newCantidad, item);
            setCantidad(newCantidad);
        }
    }

    const handleSumar = (item) => {
        if (cantidad < item.stock) {
            const newCantidad = cantidad + 1;
            updateCantCart(newCantidad, item);
            setCantidad(newCantidad);
        }
    }

    return (
        <>
            <div key={item.id}>
                <Card className="rounded-3 mb-4">
                    <Card.Body className="p-4">
                        <Row className="d-flex justify-content-between align-items-center">
                            <Col md={2} lg={2} xl={2} className="col-responsive">
                                <Link to={`/item/${item.id}`} className="col-md-2 col-lg-2 col-xl-2">
                                    <Image style={{ cursor: 'pointer', transform: 'none' }} src={item.image} className="rounded-3" alt="Cart-Item" fluid />
                                </Link>
                            </Col>
                            <Col md={3} lg={3} xl={3} className="col-responsive">
                                <p className="lead fw-bold mb-2 text-uppercase">{item.model}</p>
                                <p><span className="text-muted">Size: </span><b>{sizeCount}</b></p>
                            </Col>
                            <Col md={3} lg={3} xl={2} className="d-flex justify-content-center">
                                <ButtonGroup>
                                    <Button variant='secondary' onClick={() => handleRestar(item)}> - </Button>{' '}
                                    <Button variant='outline-secondary' disabled><b>{item.quantity}</b></Button>
                                    <Button variant='secondary' onClick={() => handleSumar(item)}> + </Button>{' '}
                                </ButtonGroup>
                            </Col>
                            <Col md={3} lg={2} xl={2} offset-lg={1} className="col-responsive total-price">
                                <h5 className="mb-0 fw-bold">${item.price * item.quantity}.00</h5>
                            </Col>
                            <Col md={1} lg={1} xl={1} className="text-center">
                                <FontAwesomeIcon className="fs-4 trash" icon={faTrash} onClick={() => removeItem(item.id)} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CartList
