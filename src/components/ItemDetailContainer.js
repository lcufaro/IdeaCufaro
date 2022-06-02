import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { getItem, baseProductos } from './productos'
import { useParams } from 'react-router-dom';
import { getItems, getItemById } from './../app/api'

const ItemDetailContainer = ({ item }) => {
    const [producto, setProducto] = useState({});
    const { id } = useParams(); //Siempre trae un string


    console.log('el id es', id);

    useEffect(() => {
        console.log("id:" + id);
        if (item) {
            getItemById(item.id).then(res => setProducto(res));
        } else {
            getItems().then(res => res.filter(prod => prod.id === id).map(producto => setProducto(producto)));
        }

        /*
        const getProduct = async () => {
            if (item) {
                console.log('existe');
                const producto = await getItem(item.id);
                setProducto(producto);
            } else {
                console.log('no existe');
                const productos = await baseProductos();
                productos.filter(prod => prod.id === Number(id)).map(producto => setProducto(producto));

            }
        }
        getProduct();
        */

    }, [id, item]);

    return (
        <ItemDetail item={producto} />
    )
}

export default ItemDetailContainer;