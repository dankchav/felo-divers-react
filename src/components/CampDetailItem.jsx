import React from 'react';
import './CampSection.css';
import { useCart } from '../context/CartContext';
// 1. Importar el hook de i18next
import { useTranslation } from 'react-i18next';

function CampDetailItem({ item, className }) {
    // 2. Obtener la función de traducción 't'
    const { t } = useTranslation(); 
    
    const {addItemToCart} = useCart();
    
    if (!item) return null; 

    const handleAddToCart = () => {
        addItemToCart(item);
        // NOTA: El mensaje de consola idealmente también debería usar la traducción
        console.log(t('messages.added_to_cart', { title: item.titulo }))
    }

    return (
        <div className={`camp-section-container ${className}`}>
            
            <div className='camp-section-hero'>
                {/* NOTA: alt debe ser traducido, pero como viene de item, lo dejaremos como está */}
                <img src={item.imagenUrl} alt={item.titulo} className='camp-section-image' />
            </div>

            <div className='camp-section-content'>
                {/* TÍTULO: Asumimos que item.titulo ya está traducido (Opción A o B) */}
                <h1>{item.titulo}</h1> 
                {/* DESCRIPCIÓN: Asumimos que item.descripcion ya está traducida */}
                <p className='camp-section-description'>{item.descripcion}</p>
                <p className='camp-section-price'>
                    {/* 3. Traducción de la etiqueta Precio */}
                    {t('item.price_label')}: <strong>{item.precio}</strong>
                </p>
                {/* 4. Traducción del botón */}
                <button className='btn-reserve' onClick={handleAddToCart}>{t('item.add_to_cart_button')}</button>
            </div>
            
        </div>
    );
}

export default CampDetailItem;