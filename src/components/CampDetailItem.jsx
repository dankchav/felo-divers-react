import React from 'react';
import './CampSection.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
// 1. Importar el hook de i18next
import { useTranslation } from 'react-i18next';

function CampDetailItem({ item, className }) {
    // 2. Obtener la función de traducción 't'
    const { t } = useTranslation(); 
    const navigate = useNavigate();
    
    const {addItemToCart} = useCart();
    
    if (!item) return null; 

    const handleReserve = () => {
        const whatsappNumber = '+573167864752';
        const message = `Hola Felo Divers, me gustaría reservar: ${item.titulo}. Precio: ${item.precio}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    const handleVerMas = () => {
        if (item.slug) {
            // Determinar la ruta según el tipo de item (etiqueta)
            if (item.etiqueta === 'Certificaciones') {
                navigate(`/certificacion/${item.slug}`);
            } else {
                navigate(`/campamento/${item.slug}`);
            }
        }
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

                {/* INCLUYE */}
                {item.contenidoCompleto && (
                    <div className='camp-section-includes'>
                        <h4 className='includes-title'>✓ Incluye</h4>
                        <ul className='includes-list'>
                            {item.contenidoCompleto.incluye && item.contenidoCompleto.incluye.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='camp-section-buttons'>
                    {/* Botón Ver Más */}
                    {item.slug && (
                        <button className='btn-see-more' onClick={handleVerMas}>
                            Ver más
                        </button>
                    )}
                    {/* Botón Reservar */}
                    <button className='btn-reserve' onClick={handleReserve}>Reservar</button>
                </div>
            </div>
            
        </div>
    );
}

export default CampDetailItem;