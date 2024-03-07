import { useEffect, useState } from 'react';
import ProductosJSON from '../../db/productos.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    // useEffect(() => {
    //     if (!category) {
    //         pedirDatos()
    //             .then((data) => {
    //                 setProductos(data);
    //             })
    //             .catch((err) => console.log(err))
    //             .finally(() => setLoading(false))
    //     } else {
    //         filterCategory(category)
    //             .then((data) => {
    //                 setProductos(data);
    //             })
    //             .catch((err) => console.log(err))
    //             .finally(() => setLoading(false))
    //     }
    // }, [category]);

    // function pedirDatos() {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(ProductosJSON);
    //         }, 2000);
    //     });
    // }

    useEffect(() => {
        if (!category) {
            pedirDatosFirestore()
        } else {
            setTimeout(() => {
                filterCategoryFirestore(category);
            }, 1000);
        }
    }, [category]);

    function pedirDatosFirestore() {
        const db = getFirestore();

        const productoRef = query(collection(db, "productos"), orderBy("id", "asc"));

        getDocs(productoRef).then((collection) => {
            const productos = collection.docs.map((doc) => {
                return doc.data();
            })
            console.log(productos);
            setProductos(productos);
        })
        .finally(() => setLoading(false))
    }

    // useEffect(() => {
    //     const db = getFirestore();

    //     const productoRef = collection(db, "productos");

    //     getDocs(productoRef).then((collection) => {
    //         const productos = collection.docs.map((doc) => {
    //             return doc.data();
    //         })
    //         console.log(productos);
    //         setProductos(productos);
    //     })
    // },[category]);

    // function filterCategory(category = "new") {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(ProductosJSON.filter((producto) => producto.category === category));
    //         }, 2000);
    //     });
    // }

    function filterCategoryFirestore(category = "new") {
        const db = getFirestore();

        // const productoRef = query(collection(db, "productos"), orderBy("id", "asc"), where("category", "==", category));
        const productoRef = query(collection(db, "productos") , where("category", "==", category));

        getDocs(productoRef).then((collection) => {
            const productos = collection.docs.map((doc) => {
                return doc.data();
            })
            console.log(productos);
            setProductos(productos);
        })
        .finally(() => setLoading(false))
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
