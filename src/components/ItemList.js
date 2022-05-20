import Item from "./Item";
import style from './styles.css'

const ItemList = ({ items }) => {
    return <>

        <ul className="lista">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    </>
}

export default ItemList;