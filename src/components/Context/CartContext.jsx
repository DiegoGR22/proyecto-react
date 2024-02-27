/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    function addItem(item, quantity) {
        setCart([...cart, {...item, quantity}])
    }
    
    function removeItem() {

    }
    function ClearAll() {

    }
    function isInCart() {

    }

    return (
        <>
            <CartContext.Provider value={{cart, addItem, removeItem, ClearAll, isInCart}}>{children}</CartContext.Provider>
        </>
    )
}

export default CartProvider
