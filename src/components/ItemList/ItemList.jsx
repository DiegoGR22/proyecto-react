/* eslint-disable react/prop-types */
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Item from '../Item/Item';

// const ItemList = ({ productos }) => {
//     return (
//         <div>
//             {productos.map(producto => (
//                 {/* <Col key={producto.id} className="col">
//                     <Card style={{ width: '20rem', overflow: 'hidden', margin: '0' }}>
//                         <Card.Img variant="top" src={producto.image} style={{ width: '100%' }} />
//                         <Card.Body>
//                             <Card.Title>{producto.model}</Card.Title>
//                             <Card.Text>{producto.description}</Card.Text>
//                             <Button variant="primary">Ver detalles</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col> */}
//                 <Item key={producto.id} producto={producto}/>
//             ))}
//         </div>
//     );
// };

// export default ItemList;
const ItemList = ({ productos }) => {
    return (
        <div>
            {productos.map(producto => (
                <Item key={producto.id} producto={producto}/>
            ))}
        </div>
    );
};

export default ItemList;
