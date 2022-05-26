import { useState, useEffect } from "react";
import "./styles.css"


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState();

    const agregarItem = () => { setCount(count < stock ? count + 1 : stock); }
    const quitarItem = () => { setCount(count > 0 ? count - 1 : 0); }

    useEffect(() => {
        setCount(initial !== undefined ? Number(initial) : 0);

    }, [initial, stock])

    return (
        <>
            <div className="ItemBox">
                <div className="ItemRow">
                    <button className='boton' onClick={quitarItem}>-</button>
                    <span> {count}</span>
                    <button className='boton' onClick={agregarItem}>+</button>
                </div>
                <button className='Agregar' onClick={() => stock > 0 ? onAdd(count) : null} >Agregar al Carrito</button>
            </div>
        </>
    );

}

export default ItemCount;