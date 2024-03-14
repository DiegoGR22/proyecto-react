// import React from 'react'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartContainer = () => {

    const { cart, clearAll, totalPrice, removeItem } = useContext(CartContext);

    // const totalPrice = cart.reduce((total, item) => {
    //     return total + (item.price * item.quantity);
    // }, 0);

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
