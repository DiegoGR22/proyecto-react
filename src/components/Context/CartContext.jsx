/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    function addItem(item, quantity) {
        const itemAgregado = {...item, quantity}
        console.log(itemAgregado)
        setCart([...cart, itemAgregado])
    }
    
    function removeItem(itemId) {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }

    function clearAll() {
        setCart([]);
    }

    function isInCart(itemId) {
        return cart.some((item) => item.id === itemId);
    }

    function cartQuantity() {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }
    

    return (
        <>
            <CartContext.Provider value={{cart, addItem, removeItem, clearAll, isInCart, cartQuantity}}>{children}</CartContext.Provider>
        </>
    )
}

export default CartProvider
