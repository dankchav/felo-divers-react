// src/components/HeroSection.jsx (Asegúrate de que la extensión sea .jsx)

import React from 'react';
import '../App.css';
import { Button } from './Button.jsx'; // Usar .jsx si renombraste
import './HeroSection.css';
// 1. Importar el hook de i18next
import { useTranslation } from 'react-i18next';

function HeroSection() {
  // 2. Obtener la función de traducción 't'
  const { t } = useTranslation(); 

  // Definimos la URL de WhatsApp
  const whatsappURL = 'https://wa.me/573004018538'; 

  return (
    <div className='hero-container'>
      <video src='https://res.cloudinary.com/felodivers/video/upload/v1767801299/felo-divers/videos/video01_jdvsfv.mp4' autoPlay loop muted />
      <h1 dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
      
      <p>{t('hero.subtitle')}</p>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to = {whatsappURL}
        >
          {t('button.reservar')}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;