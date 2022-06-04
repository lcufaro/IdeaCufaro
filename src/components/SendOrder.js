import React, { useContext, useState, useEffect } from 'react'
import { db } from './../firebase/config'
import { Shop } from './CartContext'
import { addDoc, collection } from 'firebase/firestore';
import './styles.css'


const SendOrder = () => {
    const { cart, totalOrder } = useContext(Shop);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [total, setTotal] = useState(0);
    const [orderId, setOrderid] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        //
        console.log('Orden Enviada');
        console.log('Name:' + name);
        console.log('Phone:' + phone);
        console.log('Email:' + email);
        //
        if (!name || !phone || !email) {
            console.log('faltan datos para la Orden');
            return
        }

        // crear orden
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart.map(item => { return { id: item.id, tittle: item.title, price: item.price }; }),
            date: new Date().toLocaleString(),
            total: total,
        };
        console.log('Se creo la order');
        console.log(order);
        console.log(order.buyer);
        console.log(order.items[0]);
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({ id }) => {
            console.log('ORDER ID: ' + id);
            setOrderid(id);
        }).catch(err => {
            console.log('Captura error:', err);
        })
    }

    useEffect(() => {
        setTotal(totalOrder())
    }, [totalOrder])

    return (
        <>
            <div className="modalContainer">
                <div className="modal">Orden de compra<br /><br />

                    <form onSubmit={onSubmit}>
                        <input type="text" autoFocus className="mpdal-input" placeholder="Name" id="name" value={name} onChange={e => setName(e.target.value)} /><br /><br />
                        <input type="text" className="mpdal-input" placeholder="Phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} /><br /><br />
                        <input type="text" className="mpdal-input" placeholder="Email" id="email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />

                        <button className='button button4 space min' type="submit" onClick={onSubmit}>Comprar</button>
                    </form>
                    <br /><br />
                    <div>Items<br />
                        {cart.map((item) => (
                            <div className='card-list' key={item.id} >
                                <div className='widthi'>{item.title}</div>
                                <div className='widthi'><span >#{item.quantity}</span></div>
                                <div className='widthi'><span >${item.price}</span></div>

                            </div>
                        ))}
                    </div>
                    <hr />
                    <div><span className='cantidad2'>Total: $ {total}</span></div>
                    {orderId ?
                        <div style={{ marginTop: '20px' }}><span className='orderId'><u>Se genero Order ID:</u><b> {orderId}</b> </span></div>
                        : <div></div>}
                </div>
            </div>
        </>

    )
}

export default SendOrder;
