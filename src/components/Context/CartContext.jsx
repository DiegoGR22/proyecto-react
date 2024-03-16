/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    function addItem(item, quantity) {
        const itemExists = isInCart(item.id);
    
        if (itemExists) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            );
            setCart(updatedCart);
        } else {
            const itemAgregado = { ...item, quantity };
            setCart([...cart, itemAgregado]);
        }
    }

    function addItemFast(item, quantity) {
        const itemExists = isInCart(item.id);
    
        if (itemExists) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            );
            setCart(updatedCart);
        } else {
            const itemAgregado = { ...item, quantity };
            setCart([...cart, itemAgregado]);
        }
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

    const totalPrice = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const updateCantCart = (quantity, item) => {
        const newCart = cart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
        setCart(newCart);
    };
    

    return (
        <>
            <CartContext.Provider value={{cart, addItem, removeItem, clearAll, isInCart, cartQuantity, totalPrice, updateCantCart, addItemFast}}>{children}</CartContext.Provider>
        </>
    )
}

export default CartProvider
