/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartList from "./CartList";

const CartContainer = () => {

    const { cart, clearAll, totalPrice } = useContext(CartContext);

    return (
        <>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <CartList item={item}/>
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
                                <Link to="/">Seguir Comprando</Link>
                            </Button>
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
