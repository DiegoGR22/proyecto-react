// import React from 'react'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const CartContainer = () => {

    const { cart, clearAll } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.brand} {item.model}</h3>
                        <p>Precio unitario: $ {item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>
                ))
            }
            {
                cart.length > 0 ?
                    <>
                        <p>Precio: ${totalPrice}</p>
                        <div>
                            <button onClick={clearAll}>vaciar carro</button>
                        </div>
                    </>
                    : <b>Carrito vacio</b>
            }
        </>
    )
}

export default CartContainer
