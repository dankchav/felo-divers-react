import React from 'react';
import '../../App.css';
import { campamentosData } from '../../data/dataCampamentos';
import Footer from '../Footer.jsx'; 
import CampSection from '../CampSection.jsx'; 
import { useTranslation } from 'react-i18next';

function Campamentos() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='campamentos'>{t('page_titles.camps')}</h1>
      
      <section className='campamentos-description'>
        <div className='campamentos-description-content'>
          <div className='description-card'>
            <h2 className='description-main-title'>
              {t('camps_page.main_title')} <span className='highlight'>La Casa de Felo Divers</span>
            </h2>
            <p className='description-text'>
              {t('camps_page.description')}
            </p>
            <div className='cta-text'>
              {t('camps_page.cta_text')}
            </div>
          </div>
        </div>
      </section>
      
      <CampSection items={campamentosData} />
      <Footer />
    </>
  );
}

export default Campamentos;