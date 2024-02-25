/* eslint-disable react/prop-types */
// import React from 'react';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
// import CardImg from 'react-bootstrap/esm/CardImg';
import Image from 'react-bootstrap/Image';
// import { useState } from 'react';

const ItemDetail = ({ item }) => {

    return (
        <>
            <Card className="text-center">
                <Card.Header>{item.brand}</Card.Header>
                <Card.Body>
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Image style={{ width: "10px" }} src={item.image} fluid />
                    <ItemCount stock={item.stock} initial={1} />
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </>
    )
};

export default ItemDetail;
