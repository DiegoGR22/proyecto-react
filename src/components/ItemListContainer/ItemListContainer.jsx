// // // import React from 'react';
// import Container from 'react-bootstrap/Container';
// import './ItemListContainer.css'; 
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ProductosJSON from '../../db/productos.json'
// import { useEffect, useState } from 'react';

// const ItemListContainer = () => {

//     const [productos, setProductos] = useState([]);

//     useEffect(() => {
//         pedirDatos().then(data => {
//             setProductos(data);
//         });
//     }, []);


//     function pedirDatos() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(ProductosJSON)
//             }, 2000);
//         })
//     }
    
//     function asyncMock(categoryId){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if(categoryId === "new") {
//                     const productosFiltrados = ProductosJSON.filter((item) => {
//                         return item.category === categoryId
//                     })
//                     resolve(productosFiltrados)
//                 }
//             }, 2000);
//         });
//     }

//     // useEffect(() => {
//     //     async function fetchData() {
//     //       try {
//     //         const productosFiltrados = await asyncMock(categoryId);
//     //         setProductos(productosFiltrados);
//     //       } catch (error) {
//     //         console.error('Error al cargar los productos:', error);
//     //       }
//     //     }
//     //     fetchData();
//     //   }, [categoryId]);
    
//     //   function asyncMock(categoryId) {
//     //     return new Promise((resolve, reject) => {
//     //       setTimeout(() => {
//     //         const productosFiltrados = ProductosJSON.filter(item => {
//     //           return item.category === categoryId;
//     //         });
//     //         resolve(productosFiltrados);
//     //       }, 2000);
//     //     });
//     //   }

//     return (

//         <Row xs={1} md={3} className="g-4 justify-content-center align-items-center">
//             {productos.map(producto => (
//                 <Col key={producto.id} className="col">
//                     <Card style={{ width: '20rem', overflow: 'hidden', margin: '0' }}>
//                         <Card.Img variant="top" src={producto.image} style={{ width: '100%' }} />
//                         <Card.Body>
//                             <Card.Title>{producto.model}</Card.Title>
//                             <Card.Text>{producto.description}</Card.Text>
//                             <Button variant="primary">Ver detalles</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     );
// };

// export default ItemListContainer;


import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductosJSON from '../../db/productos.json';

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
            {productos.map(producto => (
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
            ))}
        </Row>
    );
};

export default ItemListContainer;
