/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock, onAdd }) => {
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

    return (
        <div>
            <Button variant='secondary' onClick={handleDecrement}>-</Button>{' '}
            <span>{count}</span>{' '}
            <Button variant='secondary' onClick={handleIncrement}>+</Button>{' '}
            <Button variant='secondary' onClick={onAdd}>Agregar al carrito</Button>{' '}
        </div>
    );
};

export default ItemCount;
