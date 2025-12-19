import React, { createContext, useState, useContext } from 'react';

export const parsePrice = (priceString) => {
    const priceStr = String(priceString);
    const numericValue = priceStr.replace(/[^0-9]/g, ''); 
    return parseFloat(numericValue) || 0;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', { 
        style: 'currency', 
        currency: 'COP', 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0, 
    }).format(amount);
};


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItemToCart = (itemToAdd) => {
        const uniqueId = `${itemToAdd.type}-${itemToAdd.id}`;
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.uniqueId === uniqueId);
            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            } else {
                return [...prevItems, { 
                    ...itemToAdd, 
                    quantity: 1,
                    uniqueId: uniqueId,
                }];
            }
        });
        setIsCartOpen(true);
    };

    const removeItemFromCart = (uniqueId) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.uniqueId === uniqueId);

            if (existingItemIndex > -1) {
                const itemToUpdate = prevItems[existingItemIndex];

                if (itemToUpdate.quantity === 1) {
                    return prevItems.filter(item => item.uniqueId !== uniqueId);
                } else {
                    const updatedItems = [...prevItems];
                    updatedItems[existingItemIndex] = {
                        ...itemToUpdate,
                        quantity: itemToUpdate.quantity - 1,
                    };
                    return updatedItems;
                }
            }

            return prevItems;
        });
    };
    const cartTotal = cartItems.reduce((total, item) => {
        const itemPrice = parsePrice(item.precio || '0');
        return total + (itemPrice * item.quantity);
    }, 0);

    const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const toggleCart = () => setIsCartOpen(prev => !prev);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider 
            value={{ 
                cartItems, 
                isCartOpen, 
                addItemToCart, 
                removeItemFromCart, 
                toggleCart,
                closeCart,
                cartTotal, 
                totalItemsCount,
                formatCurrency,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);