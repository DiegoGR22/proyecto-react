/* eslint-disable react/prop-types */
// import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import CardImg from 'react-bootstrap/esm/CardImg';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

const ItemDetail = ({ producto }) => {

    return (
        <Card className="text-center">
            <Card.Header>a</Card.Header>
            <Card.Body>
                <Card.Title>hola</Card.Title>
                <Card.Text>
                    producto.model
                </Card.Text>
                <Image style={{width:"10px"}} src='image' fluid/>
                <ItemCount stock={7} initial={1}/>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
};

export default ItemDetail;
