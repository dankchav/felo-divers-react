import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import SobreNosotros from '../SobreNosotros';
import Testimonios from '../Testimonios';
import Footer from '../Footer';

function Inicio() {

  return (
    <>
      <HeroSection />
      <Cards />
      <SobreNosotros />
      <Testimonios />
      <Footer />
    </>
  );
}

export default Inicio;
