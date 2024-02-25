import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJSON from '../../db/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [prod, setProd] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProd(id)
            .then((data) => {
                setProd(data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    function getProd(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductosJSON.map((prod) => prod.id === id));
            }, 2000);
        })
    }

    return (
        <>
            {prod !== null ?
                <ItemDetail prod={prod} />
                : <p>Loading...</p>}
        </>
    );
}

export default ItemDetailContainer;
