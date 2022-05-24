import style from './styles.css'
import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    /* const [count, setCount] = useState(0); */

    return (

        <div className="detailInfo">

            <div>
                <h2>Informacion detallada</h2>
                <p className="itemTitle">{item.title} </p>
                <img src={item.pictureUrl} className="foto" alt="imagen producto" />
                <p >Descripcion: {item.description}</p>
                <p >Precio: {item.precio}</p>
            </div>
            <ItemCount stock="5" initial="1" />
        </div>

    )
}

export default ItemDetail;