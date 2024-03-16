/* eslint-disable react/prop-types */
// import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Item = ({ producto }) => {

    const { addItemFast } = useContext(CartContext)

    return (
        <Col key={producto.id} className="col">
            <Card style={{ height: '430px', width: '18rem', overflow: 'hidden' }}>
                <Card.Img className='mb-0' src={producto.image} style={{ height: '200px', transform: 'none' }} />
                <hr className='m-0' />  
                <Card.Body className='p-0'>
                    <div className='p-2 text-center'>
                        <Card.Title className='pt-2 text-uppercase fw-bold'>{producto.model}</Card.Title>
                        <Card.Text>{producto.description}</Card.Text>
                            <Button className='mx-2' variant="outline-primary">
                                <Link to={`/item/${producto.id}`}>Ver detalles</Link>
                            </Button>
                            <Button onClick={() => addItemFast(producto, 1, producto.stock)}><PiShoppingCartSimpleDuotone style={{width: '30px', padding: '3px'}} className="PiShoppingCartSimpleDuotone" /></Button>
                    </div>
                    <Card.Footer className='text-center'>Stock: {producto.stock}</Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;
