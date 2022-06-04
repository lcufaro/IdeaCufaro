import React, { useContext, useState, useEffect } from 'react'
import { Shop } from './CartContext'
import "./styles.css"

const Cart = () => {
    const { cart, totalOrder } = useContext(Shop);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(totalOrder())
    }, [totalOrder])

    return (
        <>
            <div className='titulo'>Carrito de compras</div>
            {cart.length === 0 ? <div className='empty'>No hay Items en el CARRITO</div> : <div></div>}

            <div><span className='cantidad'>Total: $ {total}</span></div>
        </>
    )
}

export default Cart;