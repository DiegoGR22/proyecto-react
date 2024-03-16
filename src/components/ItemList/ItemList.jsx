/* eslint-disable react/prop-types */
import Item from '../Item/Item';
import { Row, Container } from 'react-bootstrap';

const ItemList = ({ productos }) => {
    return (
        <div>
            <Container className='mt-4'>
                <Row className="g-4">
                    {productos.map(producto => (
                        <Item key={producto.id} producto={producto} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ItemList;
