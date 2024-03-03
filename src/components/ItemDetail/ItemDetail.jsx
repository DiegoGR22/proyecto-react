/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
// import CardImg from 'react-bootstrap/esm/CardImg';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} items al carrito.`);
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
                                <button>Seguir comprando</button>
                                </Link>
                                <Link to="/cart/">
                                    <button>Finalizar compra</button>
                                </Link>
                            </div>
                            : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    }
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </>
    )
};

export default ItemDetail;
