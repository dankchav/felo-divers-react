import React from 'react';
import CampDetailItem from './CampDetailItem.jsx'; // Asegúrate de la extensión
import './CampSection.css';
// 1. Importar el hook de i18next
import { useTranslation } from 'react-i18next';


function CampSection({ items}) { 
    const { t } = useTranslation();

    if (!items || items.length === 0) {
        return <h2 className='no-data-message'>{t('camps.no_camps_message')}</h2>;
    }
    
    return (
        <div className='camp-section-list'>
            {items.map((item, index) => (
                <CampDetailItem
                    item={item} 
                    className={index % 2 !== 0 ? 'reverse' : ''} 
                    key={item.id} 
                />
            ))}
        </div>
    );
}

export default CampSection;