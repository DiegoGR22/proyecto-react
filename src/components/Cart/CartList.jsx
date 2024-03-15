/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";

const CartPrueba = ({ item }) => {

    const { removeItem, updateCantCart } = useContext(CartContext);
        const [cantidad, setCantidad] = useState(item.quantity);

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
        <div>
            <div key={item.id}>
                <h3>{item.brand} {item.model}</h3>
                {/* <img src={item.image} alt="" /> */}
                <p>Precio unitario: $ {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
                <Button variant='secondary' onClick={() => handleRestar(item)}> - </Button>{' '}
                <span>{item.quantity}</span>{' '}
                <Button variant='secondary' onClick={() => handleSumar(item)}> + </Button>{' '}
                <Button onClick={() => removeItem(item.id)}>Quitar</Button>
            </div>
        </div>
    )
}

export default CartPrueba
