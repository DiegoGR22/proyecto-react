// import React from 'react'
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const CartContainer = () => {

    const { cart, totalPrice, clearAll } = useContext(CartContext);

    return (
        <>
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.model}</h3>
                        <p>Precio unitario: $ {prod.price}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Precio Total : $ {prod.price * prod.cantidad}</p>
                    </div>
                ))
            }
            {
                cart.length > 0 ?
                    <>
                        <p>Precio: 90</p>
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
