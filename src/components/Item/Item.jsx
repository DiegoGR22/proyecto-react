/* eslint-disable react/prop-types */
// import React from 'react';

const Item = ({ producto }) => {
    return (
        <div>
            <h2>{producto.model}</h2>
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
        </div>
    );
};

export default Item;
