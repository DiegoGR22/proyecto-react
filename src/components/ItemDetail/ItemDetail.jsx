/* eslint-disable react/prop-types */
// import React from 'react';

const ItemDetail = ({ producto }) => {
    return (
        <div>
            <h2>{producto.model}</h2>
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <img src={producto.image} alt={producto.model} />
        </div>
    );
};

export default ItemDetail;
