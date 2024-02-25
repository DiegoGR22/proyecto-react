import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJSON from '../../db/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProd(id)
            .then((res) => {
                setItem(res);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [id]);

    function getProd(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductosJSON.find((item) => item.id === parseInt(id)));
            }, 2000);
        });
    } 

    return (
        <>
            {
                loading ? <p>Loading...</p> : 
                <ItemDetail item={item} />
            }
        </>
    );
}

export default ItemDetailContainer;
