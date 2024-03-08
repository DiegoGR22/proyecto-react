/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemCount = ({ initial, stock, addItem, onAdd, ItemCount }) => {

    // const { addItem } = useContext(CartContext);

    let [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <div>
            <Button variant='secondary' onClick={handleDecrement}>-</Button>{' '}
            <span>{count}</span>{' '}
            <Button variant='secondary' onClick={handleIncrement}>+</Button>{' '}
            <Button variant='secondary' onClick={addItem}>Agregar al carrito</Button>{' '}
        </div>
    );
};

export default ItemCount;
