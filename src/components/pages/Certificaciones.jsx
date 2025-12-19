import React from 'react';
import '../../App.css';
import { certificacionesData } from '../../data/dataCertificaciones';
import Footer from '../Footer.jsx'; 
import CampSection from '../CampSection.jsx'; 
import { useTranslation } from 'react-i18next';

export default function Certificaciones() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className='certificaciones'>{t('page_titles.certifications')}</h1>
      <CampSection items={certificacionesData} />
      <Footer />
    </>
  );
}