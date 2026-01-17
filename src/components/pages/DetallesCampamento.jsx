import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { campamentosData } from '../../data/dataCampamentos';
import { useCart } from '../../context/CartContext';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';
import './DetallesCampamento.css';

function DetallesCampamento() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addItemToCart } = useCart();
  const [currentImageIndexDesc, setCurrentImageIndexDesc] = useState(0);
  const [itinerarioStartIndex, setItinerarioStartIndex] = useState(0);

  // Buscar el campamento por slug
  const campamento = campamentosData.find(camp => camp.slug === slug);

  if (!campamento) {
    return (
      <div className="detalles-not-found">
        <h1>Campamento no encontrado</h1>
        <button onClick={() => navigate('/campamentos')} className="btn-back">
        </button>
      </div>
    );
  }

  // Galería secundaria para descripción
  const galeriaDesc = [
   "https://res.cloudinary.com/felodivers/image/upload/v1767826742/felo-divers/imagenes/img17_bklaur.jpg",
    "https://res.cloudinary.com/felodivers/image/upload/v1767826743/felo-divers/imagenes/img18_kvj4ge.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galeria.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galeria.length) % galeria.length);
  };


  const nextImageDesc = () => {
    setCurrentImageIndexDesc((prev) => (prev + 1) % galeriaDesc.length);
  };

  const prevImageDesc = () => {
    setCurrentImageIndexDesc((prev) => (prev - 1 + galeriaDesc.length) % galeriaDesc.length);
  };

  const handleAddToCart = () => {
    addItemToCart(campamento);
    console.log(t('messages.added_to_cart', { title: campamento.titulo }));
  };

  const handleFechaClick = (fecha) => {
    const numeroWhatsApp = '573004018538'; // Número de Felo Divers
    const mensaje = `Hola, me interesa el ${campamento.titulo} para la fecha ${fecha}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <>
      <div className="detalles-campamento">
        {/* Imagen principal */}
        <div className="imagen-principal-container">
          <img 
            src={campamento.imagenUrl} 
            alt={campamento.titulo}
            className="imagen-principal"
          />
          <div className="imagen-overlay">
            <h1>{campamento.titulo}</h1>
          </div>
        </div>
        <div className="detalles-container">
          {/* Calendario */}
          {campamento.contenidoCompleto?.calendario && (
            <section className="detalles-section calendario-section">
                <h2 className="section-title">FECHAS 2026</h2>
              <div className="fechas-grid">
                {campamento.contenidoCompleto.calendario.map((fecha, index) => (
                  <button
                    key={index}
                    className="fecha-item"
                    onClick={() => handleFechaClick(fecha)}
                  >
                    {fecha}
                  </button>
                ))}
              </div>
            </section>
          )}
          {/* Descripción Principal con Carrusel */}
          <section className="detalles-section descripcion-section-double">
            <div className="descripcion-texto">
              <p className="descripcion-principal">
                {campamento.contenidoCompleto?.descripcionCompleta || campamento.descripcion}
              </p>
            </div>
            <div className="descripcion-carrusel">
              <div className="carrusel-wrapper-desc">
                <img 
                  src={galeriaDesc[currentImageIndexDesc]} 
                  alt={campamento.titulo}
                  className="carrusel-image-desc"
                />
                <button className="carrusel-button-desc prev" onClick={prevImageDesc}>
                  ❮
                </button>
                <button className="carrusel-button-desc next" onClick={nextImageDesc}>
                  ❯
                </button>
                <div className="carrusel-indicators-desc">
                  {galeriaDesc.map((_, index) => (
                    <span 
                      key={index}
                      className={`indicator-desc ${index === currentImageIndexDesc ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndexDesc(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Incluye y No Incluye */}
          <section className="detalles-section incluye-section">
            <div className="incluye-grid">
              {campamento.contenidoCompleto?.incluye && (
                <div className="incluye-content">
                  <h3>INCLUYE</h3>
                  <ul>
                    {campamento.contenidoCompleto.incluye.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {campamento.contenidoCompleto?.noIncluye && (
                <div className="no-incluye-content">
                  <h3>NO INCLUYE</h3>
                  <ul>
                    {campamento.contenidoCompleto.noIncluye.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Itinerario */}
          {campamento.contenidoCompleto?.itinerario && (
            <section className="detalles-section itinerario-section">
              <h2 className="section-title">ITINERARIO</h2>
              <div className="itinerario-container">
                {campamento.contenidoCompleto.itinerario.slice(itinerarioStartIndex, itinerarioStartIndex + 3).map((dia) => (
                  <div key={dia.dia} className="dia-card">
                    <div className="dia-numero">DÍA {dia.dia}</div>
                    <h4>{dia.titulo}</h4>
                    <ul>
                      {dia.actividades.map((actividad, index) => (
                        <li key={index}>{actividad}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button
                className="btn-ver-mas"
                onClick={() => setItinerarioStartIndex((prev) => (prev + 3) % campamento.contenidoCompleto.itinerario.length)}
              >
                Ver más
              </button>
            </section>
          )}

           {/* Precio y Reservar */}
          <section className="detalles-section precio-section">
            <div className="precio-content">
              <h3>Valor</h3>
              <p className="precio-grande">{campamento.precio}</p>
              <button className="btn-reservar-principal" onClick={() => alert('Reservar funcionalidad')}>
                Reservar
              </button>
            </div>
          </section>

          {/* Plan de Pagos */}
          {campamento.contenidoCompleto?.planPagos && (
            <section className="detalles-section pagos-section">
              <h2 className="section-title">PLAN DE PAGOS</h2>
              <p className="pagos-nota">
                Los pagos se realizan durante los primeros 5 días de cada mes, comenzando desde la fecha de reserva y finalizando un mes antes de tu experiencia.
              </p>
              <div className="pagos-grid">
                {campamento.contenidoCompleto.planPagos.map((plan, index) => (
                  <div key={index} className="plan-item">
                    <h4>{plan.dias}</h4>
                    <p>{plan.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Botones de acción finales */}
          <section className="detalles-section acciones-section">
            <div className="botones-finales">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                {t('item.add_to_cart_button')}
              </button>
              <button className="btn-reserve-final" onClick={() => alert('Reservar funcionalidad')}>
                Reservar Ahora
              </button>
            </div>
          </section>

          {/* CTA Final */}
          <section className="cta-final">
            <h3>¡Vive lo que siempre soñaste bajo el mar!</h3>
            <p>El océano te está esperando… Reserva tu cupo ahora</p>
            <p className="cupos-limitados">¡CUPOS LIMITADOS!</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetallesCampamento;
