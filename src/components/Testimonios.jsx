import React, { useEffect } from 'react';
import './Testimonios.css';

function Testimonios() {
  const postUrls = [
    'https://www.instagram.com/reel/C3yrprkLHxY/',
    'https://www.instagram.com/p/DKVjoZVtt4W/',
    'https://www.instagram.com/p/DHaAXHrsC0E/',
    'https://www.instagram.com/reel/DEqzls6N81t/',
    'https://www.instagram.com/reel/CqrHeksMCu7/',
    'https://www.instagram.com/reel/C1FfWkhu55S/',
  ];

  useEffect(() => {
    // Procesar embeds de Instagram cuando el componente se monta
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="testimonios-section">
      <div className="testimonios-container">
        <h2 className="testimonios-title">¿QUÉ DICEN DE NOSOTROS?</h2>
        <p className="testimonios-subtitle">Conoce las experiencias de nuestros buzos en Instagram</p>
        
        <div className="testimonios-grid">
          {postUrls.map((url, index) => (
            <blockquote 
              key={index}
              className="instagram-media" 
              data-instgrm-permalink={url} 
              data-instgrm-version="14"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
