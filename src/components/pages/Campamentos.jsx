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
      <h1 className='campamentos' dangerouslySetInnerHTML={{ __html: t('page_titles.camps_full') }} />
      <CampSection items={campamentosData} />
      <Footer />
    </>
  );
}

export default Campamentos;