import style from './styles.css'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({ item }) => {
    return <>
        <li className="item">
            <div>
                <h3 >{item.title}</h3>
                <img src={item.pictureUrl} className="foto" />
                <p>{item.description}</p>
                <button>Ver detalle del Producto</button>
                <ItemDetailContainer item={item} />
            </div>

        </li>
    </>
}

export default Item;
