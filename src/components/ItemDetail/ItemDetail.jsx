/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
// import CardImg from 'react-bootstrap/esm/CardImg';
import Image from 'react-bootstrap/Image';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {

    const { cart, addItem } = useContext(CartContext);

    const [itemCount, setItemCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = (quantity) => {
        setItemCount(quantity);
        setIsAdded(true);
    }

    return (
        <>
            <Card className="text-center">
                <Card.Header>{item.brand}</Card.Header>
                <Card.Body>
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Image style={{ width: "10px" }} src={item.image} fluid />
                    {
                        isAdded ?
                            <div>
                                <Link to={"/"}>
                                    <Button variant='secondary'>Seguir comprando</Button>{' '}
                                </Link>
                                <Link to="/cart/">
                                    <Button variant='secondary'>Ir al Carrito</Button>{' '}
                                </Link>
                            </div>
                            : <ItemCount stock={item.stock} initial={1} item={item} onAdd={onAdd}/>
                    }
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </>
    )
};

export default ItemDetail;
