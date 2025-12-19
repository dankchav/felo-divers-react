// src/components/Cards.jsx (Asegúrate de que la extensión sea .jsx)

import React from 'react';
import './Cards.css';
// Asegúrate de que CardItem use la extensión correcta
import CardItem from './CardItem.jsx'; 
// 1. Importar el hook de i18next
import { useTranslation } from 'react-i18next';

function Cards() {
    // 2. Obtener la función de traducción 't'
    const { t } = useTranslation();

    return (
        <div className='cards'>
            {/* 3. Traducción del Título Principal */}
            <h1>{t('cards.calendar_title')}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/* 4. Usar la función t() para los props 'text' y 'label' */}
                        <CardItem
                            src='images/img03.png'
                            text={t('cards.item1.text')}
                            label={t('cards.item1.label')}
                            path='/campamentos'
                        />
                        <CardItem
                            src='images/img04.png'
                            text={t('cards.item2.text')}
                            label={t('cards.item2.label')}
                            path='/campamentos'
                        />
                        <CardItem
                            src='images/img05.png'
                            text={t('cards.item3.text')}
                            label={t('cards.item3.label')}
                            path='/campamentos'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img06.png'
                            text={t('cards.item4.text')}
                            label={t('cards.item4.label')}
                            path='/viajes'
                        />
                        <CardItem
                            src='images/img07.png'
                            text={t('cards.item5.text')}
                            label={t('cards.item5.label')}
                            path='/viajes'
                        />
                        <CardItem
                            src='images/img08.png'
                            text={t('cards.item6.text')}
                            label={t('cards.item6.label')}
                            path='/viajes'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img09.png'
                            text={t('cards.item7.text')}
                            label={t('cards.item7.label')}
                            path='/experiencias'
                        />
                        <CardItem
                            src='images/img09.png'
                            text={t('cards.item8.text')}
                            label={t('cards.item8.label')}
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;