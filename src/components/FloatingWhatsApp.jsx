import React from 'react';
import './FloatingWhatsApp.css';

function FloatingWhatsApp() {
  const whatsappNumber = '+573167864752'; // Número de WhatsApp de Felo Divers
  const whatsappMessage = 'Hola Felo Divers, me gustaría obtener más información sobre los servicios de buceo.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Contáctanos por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default FloatingWhatsApp;
