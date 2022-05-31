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



    return (
        <Shop.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </Shop.Provider>
    )

}

export default ShopProvider;
