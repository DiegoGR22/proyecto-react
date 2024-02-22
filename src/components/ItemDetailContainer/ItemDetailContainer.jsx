import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJSON from '../../db/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProducto(id)
            .then((res) => {
                setProducto(res);
            })
    },[id]);

    function getProducto(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductosJSON.find((producto) => producto.id === id));
            }, 2000);
        })
    }

    return (
        <div>
            {producto !== null ? <ItemDetail producto={producto} /> : <p>Loading...</p>}
        </div>
    );
}

export default ItemDetailContainer;
