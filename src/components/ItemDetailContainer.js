import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { getItem } from './productos'

const ItemDetailContainer = ({ item }) => {
    const [producto, setProducto] = useState({});
    useEffect(() => {

        const getProduct = async () => {
            const producto = await getItem(item.id);
            setProducto(producto);
            console.log(producto);
        }
        getProduct();
    }, []);

    return (
        <div style={{
            width: '600px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer;