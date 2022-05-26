import Item from "./Item";
import "./styles.css"

const ItemList = ({ items }) => {
    return <>

        <ul className="listaItem">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    </>
}

export default ItemList;