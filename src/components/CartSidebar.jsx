// src/components/CartSidebar.jsx (Asegúrate de que la extensión sea .jsx)

import React from 'react';
import './CartSidebar.css'; 
import { useCart, parsePrice } from '../context/CartContext'; 
// 1. Importar el hook de i18next
import { useTranslation } from 'react-i18next'; 

function CartSidebar() {
    // 2. Obtener la función de traducción 't'
    const { t } = useTranslation(); 
    
    const { 
        cartItems, 
        isCartOpen, 
        closeCart, 
        removeItemFromCart, 
        cartTotal,          
        totalItemsCount,   
        formatCurrency     
    } = useCart();
    
    const isCartEmpty = cartItems.length === 0;

    return (
        <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
            
            <div className='cart-overlay' onClick={closeCart}></div>

            <div className='cart-content'>
                
                <div className='cart-header'>
                    {/* 3. Traducción del Título del Carrito */}
                    <h2>{t('cart.title', { count: totalItemsCount })}</h2> 
                    <button className='close-button' onClick={closeCart}>
                        <i className='fas fa-times'></i>
                    </button>
                </div>
                
                <div className='cart-body'>
                    {isCartEmpty ? (
                        <div className='cart-empty-message'>
                            <i className='fas fa-box-open' />
                            {/* 4. Traducción del Mensaje de Vacío */}
                            <p>{t('cart.empty_message')}</p>
                        </div>
                    ) : (
                        <ul className='cart-items-list'>
                            {cartItems.map((item) => {
                                const itemPriceNumeric = parsePrice(item.precio || '0');
                                const itemSubtotal = itemPriceNumeric * item.quantity;

                                return (
                                    <li key={item.id} className='cart-item'> 
                                        <div className='item-details'>
                                            <span className='item-name'>
                                                {item.titulo} 
                                                <span className='item-quantity'>x {item.quantity}</span> 
                                            </span>
                                            <span className='item-price'>
                                                <strong>{formatCurrency(itemSubtotal)}</strong>
                                            </span> 
                                        </div>
                                        <button 
                                            className="remove-button" 
                                            onClick={() => 
                                                removeItemFromCart(item.uniqueId)}
                                            // 5. Traducción del atributo title
                                            title={t('cart.remove_item_title')}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                
                {/*MUESTRA EL TOTAL DEL CARRITO SOLO SI NO ESTÁ VACÍO */}
                {!isCartEmpty && (
                    <div className='cart-footer'>
                        <div className='cart-total-line'>
                            {/* 6. Traducción de la etiqueta Total */}
                            <span>{t('cart.total_label')}:</span>
                            <strong>{formatCurrency(cartTotal)}</strong> 
                        </div>
                        {/* 7. Traducción del botón de Finalizar Compra */}
                        <button className='btn-checkout'>{t('cart.checkout_button')}</button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CartSidebar;