import { useEffect, useState } from 'react';
import ProductosJSON from '../../db/productos.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        if (!category) {
            pedirDatos()
                .then((data) => {
                    setProductos(data);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        } else {
            filterCategory(category)
                .then((data) => {
                    setProductos(data);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [category]);

    function pedirDatos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductosJSON);
            }, 2000);
        });
    }

    function filterCategory(category = "new") {
        return new Promise((resolve) =>  {
            setTimeout(() => {
                resolve(ProductosJSON.filter((producto) => producto.category === category));
            }, 2000);
        });
    }

    return (
        <>
            {
                loading ? <p>Loading...</p> :
                    < ItemList productos={productos} />
            }
        </>
    );
};

export default ItemListContainer;
