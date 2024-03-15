/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const CartContainer = () => {

    const { cart, clearAll, totalPrice, removeItem, updateCantCart } = useContext(CartContext);
    const { search } = useLocation();
    const { quantity } = queryString.parse(search);
    const [cantidad, setCantidad] = useState(parseInt(quantity));

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
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.brand} {item.model}</h3>
                        {/* <img src={item.image} alt="" /> */}
                        <p>Precio unitario: $ {item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <Button variant='secondary' onClick={()=> handleRestar(item)}> - </Button>{' '}
                        <span>{item.quantity}</span>{' '}
                        <Button variant='secondary' onClick={()=> handleSumar(item)}> + </Button>{' '}
                        <Button onClick={() => removeItem(item.id)}>Quitar</Button>
                    </div>
                ))
            }
            {
                cart.length > 0 ?
                    <>
                        <strong>Precio Total: ${totalPrice}</strong>
                        <div>
                            <Button onClick={clearAll}>vaciar carro</Button>
                            {/* <Checkout /> */}
                            <Button>
                                <Link to="/cart/checkout">Finaliza tu compra</Link>
                            </Button>
                        </div>
                    </>
                    : <>
                        <b>Carrito vacio</b>
                        <Button>
                            <Link to={"/"}>Volver al Inicio</Link>
                        </Button>
                    </>
            }
        </>
    )
}

export default CartContainer
