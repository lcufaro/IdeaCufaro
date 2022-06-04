import { createContext, useState } from 'react';

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Agregar Item de producto
    const addItem = (item, quantity) => {
        const cartItem = isInCart(item.id);
        console.log(cartItem);
        if (cartItem) {
            cartItem.quantity += quantity;
            const cartFilter = cart.filter(dat => dat.id !== cartItem.id);
            cartFilter.push(cartItem);
            setCart(cartFilter);
        } else {
            setCart([...cart, { ...item, quantity: quantity }]);
        }
    }

    // Ver si existe
    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    // Remover el Item del Carrito
    const removeItem = (ItemId) => {
        const cartFilter = cart.filter(item => item.id !== ItemId);
        setCart(cartFilter);
    }

    // Limpiar el Carrito
    const clear = () => {
        setCart([]);
    }


    const totalOrder = () => {
        return cart ? cart.reduce((acc, item) => acc += (item.price * item.quantity), 0) : 0;
    }


    return (
        <Shop.Provider value={{ cart, addItem, removeItem, clear, totalOrder }}>
            {children}
        </Shop.Provider>
    )

}

export default ShopProvider;
