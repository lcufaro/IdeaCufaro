import { useNavigate } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import React, { useContext, useEffect, useState } from 'react'

import { Shop } from './CartContext'


const CartWidget = () => {
    const navigate = useNavigate()
    const { cantidadItems } = useContext(Shop);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        setCantidadTotal(cantidadItems())
    }, [cantidadItems])

    return (
        <>
            <div className='width'>
                {cantidadTotal !== 0 && <BsCart style={{ width: 30, height: 30 }} onClick={() => navigate('/cart')} />}
                {cantidadTotal !== 0 && <span className='absolute'>{cantidadTotal}</span>}
            </div>
        </>
    );
}

export default CartWidget;

