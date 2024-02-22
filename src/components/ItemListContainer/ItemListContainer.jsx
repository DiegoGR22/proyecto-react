import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ProductosJSON from '../../db/productos.json';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryid } = useParams();

    // useEffect(() => {
    //     pedirDatos().then(data => {
    //         setProductos(data);
    //     });
    // }, []);

    useEffect(() => {
        if (!categoryid) {
          pedirDatos()
            .then((data) => {
              setProductos(data);
            })
            .catch((err) => console.log(err))
        } else {
          filterCategory(categoryid)
            .then((data) => {
              setProductos(data);
            })
            .catch((err) => console.log(err))
        }
      }, [categoryid]);

    function pedirDatos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ProductosJSON);
            }, 2000);
        });
    }

    function filterCategory (categoryid) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(ProductosJSON.filter((productos) => productos.category === categoryid));
          }, 2000);
        });
      };
      

    return (
            <ItemList productos={productos}/>
    );

};

export default ItemListContainer;
