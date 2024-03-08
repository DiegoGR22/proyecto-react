/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemCount = ({ initial, stock, item, onAdd}) => {

    const { addItem } = useContext(CartContext);

    let [count, setCount] = useState(initial);

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
        addItem(item, count);
    }

    return (
        <div>
            <Button variant='secondary' onClick={handleDecrement}>-</Button>{' '}
            <span>{count}</span>{' '}
            <Button variant='secondary' onClick={handleIncrement}>+</Button>{' '}
            <Button variant='secondary' onClick={handleOnAdd}>Agregar al carrito</Button>{' '}
            {/* <Button variant='secondary' onClick={() => { addItem(item, quantity); handleOnAdd()}}>Agregar al carrito</Button>{' '} */}
        </div>
    );
};

export default ItemCount;
