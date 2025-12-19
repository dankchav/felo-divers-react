import React from 'react';
import '../../App.css';
import { viajesData } from '../../data/dataViajes';
import Footer from '../Footer.jsx'; 
import CampSection from '../CampSection.jsx'; 
import { useTranslation } from 'react-i18next';

export default function Viajes() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='viajes'>{t('page_titles.trips')}</h1>
      <CampSection items={viajesData} />
      <Footer />
    </>
  );
}