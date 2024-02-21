import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ProductosJSON from '../../db/productos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos().then(data => {
            setProductos(data);
        });
    }, []);

    function pedirDatos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductosJSON);
            }, 2000);
        });
    }

    return (
        <Row xs={1} md={3} className="g-4 justify-content-center align-items-center">
            {/* {productos.map(producto => (
                <Col key={producto.id} className="col">
                    <Card style={{ width: '20rem', overflow: 'hidden', margin: '0' }}>
                        <Card.Img variant="top" src={producto.image} style={{ width: '100%' }} />
                        <Card.Body>
                            <Card.Title>{producto.model}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            <Button variant="primary">Ver detalles</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))} */}
            <ItemList productos={productos}/>
        </Row>
    );
    
    // return (
    //         <ItemList productos={productos}/>
    // );
};

export default ItemListContainer;
