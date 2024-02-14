/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
    return (
        <div>
            {productos.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.model}</h3>
                    <p>{producto.description}</p>
                    <Link to={`/item/${producto.id}`}>Ver detalles</Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
