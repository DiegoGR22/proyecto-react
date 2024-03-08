// import React from 'react'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const CartContainer = () => {

    const { cart, totalPrice, clearAll } = useContext(CartContext);

    console.log(cart)

    return (
        <>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.brand} {item.model}</h3>
                        <p>Precio unitario: $ {item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio Total : ${item.price * item.quantity}</p>
                    </div>
                ))
            }
            {
                cart.length > 0 ?
                    <>
                        <p>Precio: {totalPrice}</p>
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
