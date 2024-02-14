// import React from 'react';
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css'; // Importar estilos desde un archivo externo
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductosJSON from '../../db/productos.json'
import { useEffect } from 'react';
import { useState } from 'react';

const ItemListContainer = ({ greeting }) => {

const [productos, setProductos] = useState([]);

useEffect(() => {
    pedirDatos().then(data => {
        setProductos(data);
    });
},[]);


function pedirDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ProductosJSON)
        }, 2000);
    })
}

    return (
        <Container className="custom-container mt-4">
        {/* <div className="custom-content">
            <h2 className="custom-heading">Bienvenido</h2>
            <p className="custom-paragraph">{greeting}</p>
        </div> */}
        {productos.map(producto => (
            <Card key={producto.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.model}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Button variant="primary">Ver detalles</Button>
                </Card.Body>
            </Card>
        ))}
    </Container>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer;
