// import React from 'react';
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css'; // Importar estilos desde un archivo externo
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductosJSON from '../../db/productos.json'
import { useEffect, useState } from 'react';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos().then(data => {
            setProductos(data);
        });
    }, []);


    function pedirDatos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ProductosJSON)
            }, 2000);
        })
    }

    return (

        <Row xs={1} md={3} className="g-4 justify-content-center align-items-center">
            {productos.map(producto => (
                <Col key={producto.id} className="col">
                    <Card style={{ width: '20rem', overflow: 'hidden', margin: '0'}}>
                            <Card.Img variant="top" src={producto.image} style={{ width: '100%' }} />
                        <Card.Body>
                            <Card.Title>{producto.model}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            <Button variant="primary">Ver detalles</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer;
