import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from './CartContext'
import "./styles.css"

const Cart = () => {
    const navigate = useNavigate();
    const { cart, totalOrder, removeItem } = useContext(Shop);

    const [total, setTotal] = useState(0);

    const evRemove = (id) => {
        console.log('Eliminar Item:' + id);
        removeItem(id);
    }

    useEffect(() => {
        setTotal(totalOrder())
    }, [totalOrder])


    return (
        <>
            <div className='titulo'>Carrito de compras</div>

            {cart.length === 0 ?
                <div>
                    <div className='empty'>No hay Items en el CARRITO</div> <br />
                    <button style={{ padding: "10px", cursor: 'pointer' }} onClick={() => navigate('/')}>Ir de Compras</button>
                </div>
                : <div></div>}
            <br />
            <div className='card-list-2'>
                <div className='widthi'>Imagen</div>
                <div className='widthi'>Titulo</div>
                <div className='widthi'>Descripcion</div>
                <div className='widthi'>Cantidad</div>
                <div className='widthi'>Precio</div>
                <div className='widthi'>Eliminar</div>
            </div>

            {cart.map((item, index) => (
                <div className='card-list' key={item.id}>
                    <div className='widthi'><img className="imagen-2" src={item.pictureUrl} /></div>
                    <div className='widthi'>{item.title}</div>
                    <div className='widthi'>{item.description}</div>
                    <div className='widthi'><span >{item.quantity}</span></div>
                    <div className='widthi'><span >{item.price}</span></div>

                    <div>
                        <button key={index} style={{ padding: "10px", cursor: 'pointer' }} onClick={() => evRemove(item.id)}>X</button>
                    </div>
                </div>
            ))}

            <div><span className='cantidad'>Total: $ {total}</span></div>
        </>
    )
}

export default Cart;