import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import ProductosJSON from '../../db/productos.json';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducto = () => {
            // Simulate fetching data from API
            const producto = ProductosJSON.find(item => item.id === parseInt(id));
            setProducto(producto);
        };

        fetchProducto();
    }, [id]);

    return (
        <div>
            {producto && <ItemDetail producto={producto} />}
        </div>
    );
};

export default ItemDetailContainer;
