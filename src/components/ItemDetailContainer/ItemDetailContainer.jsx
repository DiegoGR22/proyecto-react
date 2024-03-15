import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJSON from '../../db/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { getDoc, doc, getFirestore } from 'firebase/firestore';
// import { db } from "../firebase/config";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        // getProdFirebase()

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

    // function getProdFirebase(id) {
    //     const db = getFirestore();

    //     const docRef = doc(db, "productos", id);
    //     getDoc(docRef)
    //         .then((resp) => {

    //             console.log({ ...resp.data(), id: resp.id})
    //             console.log({ ...resp.data()})
    //             setItem({id: resp.id, ...resp.data()})
    //         })
    //         .finally(() => setLoading(false));
    // }

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
