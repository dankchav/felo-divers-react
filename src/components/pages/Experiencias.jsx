import React from 'react';
import '../../App.css';
import { experienciasData } from '../../data/dataExperiencias';
import Footer from '../Footer.jsx'; 
import CampSection from '../CampSection.jsx'; 
import { useTranslation } from 'react-i18next';

export default function Experiencias() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='experiencias'>{t('page_titles.experiences')}</h1>
      <CampSection items={experienciasData} />
      <Footer />
    </>
  );
}