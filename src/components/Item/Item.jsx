/* eslint-disable react/prop-types */
// import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Item = ({ producto }) => {

    const { addItemFast } = useContext(CartContext)

    return (
        <Row xs={1} md={3} className="g-4 justify-content-center align-items-center">
            <Col key={producto.id} className="col">
                <Card style={{ width: '20rem', overflow: 'hidden', margin: '0' }}>
                    <Card.Img variant="top" src={producto.image} style={{ width: '100%' }} />
                    <Card.Body>
                        <Card.Title>{producto.model}</Card.Title>
                        <Card.Text>{producto.description}</Card.Text>
                        <Button variant="primary">
                            <Link to={`/item/${producto.id}`}>Ver detalles</Link>
                        </Button>
                        <Button onClick={() => addItemFast(producto, 1)}><PiShoppingCartSimpleDuotone className="PiShoppingCartSimpleDuotone"/></Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Item;
