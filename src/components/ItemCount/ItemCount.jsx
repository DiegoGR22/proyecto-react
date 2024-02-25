/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ItemCount = ({ initial, stock }) => {
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

    const onAdd = () => {
        setCount(count);
        console.log(`Agregaste ${count} items al carrito`);
    };

    return (
        <div>
            <Button variant='secondary' onClick={handleDecrement}>-</Button>{' '}
            <span>{count}</span>{' '}
            <Button variant='secondary' onClick={handleIncrement}>+</Button>{' '}
            <Link to="/cart/">
                <Button variant='secondary' onClick={onAdd}>Agregar al carrito</Button>{' '}
            </Link>
        </div>
    );
};

export default ItemCount;
