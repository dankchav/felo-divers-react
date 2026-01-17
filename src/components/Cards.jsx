// src/components/Cards.jsx

import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Cards() {
    const { t } = useTranslation();

    const cardData = [
        {
            icon: <i className='fas fa-campground'></i>,
            title: t('cards_section.camps'),
            description: t('cards_section.camps_desc'),
            path: '/campamentos',
            label: 'Campamentos'
        },
        {
            icon: <i className='fas fa-certificate'></i>,
            title: t('cards_section.certifications'),
            description: t('cards_section.certifications_desc'),
            path: '/certificaciones',
            label: 'Certificaciones'
        },
        {
            icon: <i className='fas fa-plane'></i>,
            title: t('cards_section.trips'),
            description: t('cards_section.trips_desc'),
            path: '/viajes',
            label: 'Viajes'
        },
        {
            icon: <i className='fas fa-water'></i>,
            title: t('cards_section.experiences'),
            description: t('cards_section.experiences_desc'),
            path: '/experiencias',
            label: 'Experiencias'
        }
    ];

    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items-grid'>
                        {cardData.map((card, index) => (
                            <Link 
                                key={index}
                                to={card.path}
                                className={`card-item ${card.featured ? 'featured' : ''}`}
                            >
                                <div className='card-item__icon'>
                                    {card.icon}
                                </div>
                                <h3 className='card-item__title'>{card.title}</h3>
                                <p className='card-item__description'>{card.description}</p>
                                <span className='card-item__link'>{t('cards_section.view_more')}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;