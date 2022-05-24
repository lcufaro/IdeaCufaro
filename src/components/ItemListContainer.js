import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { baseProductos } from "./productos";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
            const items = await baseProductos()
            setProductos(items);
        }
        getInfo();
    }, [])

    return (
        <>
            <div>
                <p style={{ fontSize: 18 }}>  {greeting} </p>

            </div>
            <div className="lista" >
                <ItemList items={productos} style={{ cursor: 'pointer' }} />
            </div>
        </>
    );
}

export default ItemListContainer;