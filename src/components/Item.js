import { useParams, useNavigate } from 'react-router-dom';
import "./styles.css"


const Item = ({ item }) => {
    const { id } = useParams(); //Siempre trae un string
    const navigate = useNavigate();

    console.log('el id es', id);

    return <>
        <li>
            <div className="item">
                <h2><b>{item.title}</b></h2>
                <img src={item.pictureUrl} className="foto" />
                <p>{item.description}</p>
                <button style={{ padding: "10px", cursor: 'pointer' }} onClick={() => navigate(`/item/${item.id}`)}>Ver detalle del Producto</button>
                <p > $ {item.price}</p>
                <p >Stock Disponible: {item.stock}</p>

            </div>

        </li>
    </>
}

export default Item;
