import { useState } from "react";
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

const ItemDetail = ({ item }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);

    const onComprar = (quantityToAdd) => {
        console.log('Cantidad comprada:' + quantityToAdd);
        setQuantity(quantityToAdd);
    }

    const onTerminar = () => {
        navigate('/cart');
        console.log("Terminó la compra");
    }

    return (

        <div className="detailInfo">

            <div>
                <h2>Informacion detallada</h2>
                <p className="itemTitle">{item.title} </p>
                <img src={item.pictureUrl} className="foto" alt="imagen producto" />
                <p >Descripcion: {item.description}</p>

            </div>
            {quantity === 0 ?
                <ItemCount stock={item.stock} initial="1" onAdd={onComprar} /> :
                <div>
                    <button onClick={(onTerminar)} >Terminar mi compra</button>
                </div>
            }

        </div>

    )
}

export default ItemDetail;