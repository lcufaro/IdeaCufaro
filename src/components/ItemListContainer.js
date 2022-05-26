import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import { baseProductos } from "./productos";
import "./styles.css"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const { id } = useParams(); //Siempre trae un string


    console.log('el id es', id);


    useEffect(() => {
        const getInfo = async (id) => {
            const items = await baseProductos()
            id !== undefined ? setProductos(items.filter(prod => prod.title === id)) : setProductos(items);
        }
        console.log('el id es2', id);
        getInfo(id);
    }, [id])

    return (
        <>
            <div>
                <h2> {greeting} </h2>
            </div>
            <div className="lista" >
                <ItemList items={productos} style={{ cursor: 'pointer' }} />
            </div>
        </>
    );
}

export default ItemListContainer;