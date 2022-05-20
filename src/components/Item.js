import style from './styles.css'
const Item = ({ item }) => {
    return <>
        <li className="listaItem">
            <div>
                <h3 >{item.title}</h3>
                <img src={item.pictureUrl} className="foto" />
                <p>{item.description}</p>
                <button>Ver detalle del Producto</button>
                <p>Stock disponible: {item.stock}</p>
            </div>

        </li>
    </>
}

export default Item;
