import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { certificacionesData } from '../../data/dataCertificaciones';
import { useCart } from '../../context/CartContext';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';
import './DetallesCampamento.css';
import './DetallesCertificacion.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { 
  IconClock, 
  IconHourglass, 
  IconSwimming, 
  IconFlag, 
  IconLanguage, 
  IconUsersGroup, 
  IconBus, 
  IconBook, 
  IconLocation
} from '@tabler/icons-react';

function DetallesCertificacion() {
        // Función para agregar al carrito
        const handleAddToCart = () => {
          addItemToCart(certificacion);
          console.log(t('messages.added_to_cart', { title: certificacion.titulo }));
        };
      // Función para contactar por WhatsApp
      const handleContactar = () => {
        const numeroWhatsApp = '573004018538'; // Número de Felo Divers
        const mensaje = `Hola, me interesa la ${certificacion.titulo}. ¿Cuál es la próxima fecha disponible?`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
      };
    // Funciones para el carrusel de imágenes
    const nextImageDesc = () => {
      setCurrentImageIndexDesc((prev) => (prev + 1) % galeriaDesc.length);
    };

    const prevImageDesc = () => {
      setCurrentImageIndexDesc((prev) => (prev - 1 + galeriaDesc.length) % galeriaDesc.length);
    };
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addItemToCart } = useCart();
  const [currentImageIndexDesc, setCurrentImageIndexDesc] = useState(0);
  const [itinerarioStartIndex, setItinerarioStartIndex] = useState(0);

  // Buscar la certificación por slug
  const certificacion = certificacionesData.find(cert => cert.slug === slug);
  // Galería secundaria para descripción
  const galeriaDesc = [
    "https://res.cloudinary.com/felodivers/image/upload/v1768680905/felo-divers/imagenes/img47_kxmzen.jpg",
    "https://res.cloudinary.com/felodivers/image/upload/v1768681262/felo-divers/imagenes/img39_t0wqpr.jpg",
    "https://res.cloudinary.com/felodivers/image/upload/v1768681605/felo-divers/imagenes/img54_uvgbn0.jpg",
    "https://res.cloudinary.com/felodivers/image/upload/v1768681785/felo-divers/imagenes/img55_hlws6f.jpg"
  ];
  return (
    <>
      <div className="detalles-campamento">
        {/* Imagen principal */}
        <div className="imagen-principal-container">
          <img 
            src={certificacion.imagenUrl} 
            alt={certificacion.titulo}
            className="imagen-principal"
          />
          <div className="imagen-overlay">
            <h1>{certificacion.titulo}</h1>
          </div>
        </div>
        <div className="detalles-container-section descripcion">
          {/* Descripción Principal con Carrusel */}
          <section className="detalles-section descripcion-section-double">
            <div className="descripcion-texto">
              <p className="descripcion-principal">
                {certificacion.contenidoCompleto?.descripcionCompleta || certificacion.descripcion}
              </p>
            </div>
            <div className="descripcion-carrusel">
              <div className="carrusel-wrapper-desc">
                <img 
                  src={galeriaDesc[currentImageIndexDesc]} 
                  alt={certificacion.titulo}
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
        </div>
        <div className="reserva-cuadro-superior">
          <div className="reserva-disponible">Disponible</div>
          <div className="reserva-precio">{certificacion.precio} COP</div>
          <button className="btn-reservar-principal" onClick={handleContactar}>Reservar </button>
          {/*<div className="reserva-favoritos">
            <span style={{fontSize: '1.5em', verticalAlign: 'middle', marginRight: '8px'}}>♡</span>
            <span className="reserva-favoritos-texto">AÑADIR A MIS FAVORITOS</span>
          </div>*/}
        </div>

        <div className="detalles-container">
          {/* INFORMACIÓN CLAVE */}
          {certificacion.contenidoCompleto?.infoClave && (
            <section className="detalles-section info-clave-section info-clave-bg">
              <div className="descripcion-incluye-grid">
                <div className="descripcion-paquete-titulo">
                  <span className="icono-descripcion" aria-label="info">
                    <IconClock size={36} stroke={1.5} color="#333" style={{ background: '#f4f7fa', borderRadius: '50%' }} />
                  </span>
                  <span className="descripcion-paquete-texto">
                    INFORMACIÓN DEL CURSO
                  </span>
                </div>
                <div className="info-clave-listas-flex">
                  <ul className="info-clave-lista">
                    {certificacion.contenidoCompleto.infoClave.map((item, index) => {
                      let IconComponent;
                      switch (index) {
                        case 0:
                          IconComponent = IconLocation; break;
                        case 1:
                          IconComponent = IconHourglass; break;
                        case 2:
                          IconComponent = IconBook; break;
                        case 3:
                          IconComponent = IconSwimming; break;
                        default:
                          IconComponent = IconClock;
                      }
                      return (
                        <li key={index}>
                          <span className="info-clave-icono">
                            <IconComponent size={24} stroke={1.5} color="#6c7a89" />
                          </span>
                          <span>{item.texto}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {certificacion.contenidoCompleto.infoClaveExtra && (
                    <ul className="info-clave-lista info-clave-extra">
                      {certificacion.contenidoCompleto.infoClaveExtra.map((item, index) => (
                        <li key={index}>
                          <span className="info-clave-icono">
                            <IconClock size={24} stroke={1.5} color="#6c7a89" />
                          </span>
                          <span>{item.texto}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          )}

           <section className="imagen-destacada-container">
            <div className="imagen-destacada-content">
              <div className="imagenes-destacadas-grid">
                <div className="imagen-destacada-card">
                  <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1768680382/felo-divers/imagenes/img46_yqxafv.jpg" 
                    alt="Imagen destacada 1"
                    className="imagen-destacada"
                  />
                </div>
                <div className="imagen-destacada-card">
                  <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1768679722/felo-divers/imagenes/img36_sy3sqa.jpg" 
                    alt="Imagen destacada 2"
                    className="imagen-destacada"
                  />
                </div>
                <div className="imagen-destacada-card">
                  <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1768679720/felo-divers/imagenes/img34_nkshrf.jpg" 
                    alt="Imagen destacada 3"
                    className="imagen-destacada"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ¿QUÉ NECESITAS PARA EMPEZAR? */}
          {certificacion.contenidoCompleto?.queNecesitas && (
            <section className="detalles-section necesitas-section">
              <div className="descripcion-incluye-grid">
                <div className="descripcion-paquete-titulo">
                  <span className="icono-descripcion" aria-label="info">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="#333" strokeWidth="2"/>
                      <circle cx="8" cy="8" r="1" fill="#333"/>
                      <rect x="7" y="11" width="10" height="2" rx="1" fill="#333"/>
                      <rect x="7" y="15" width="7" height="2" rx="1" fill="#333"/>
                    </svg>
                  </span>
                  <span className="descripcion-paquete-texto">
                    ¿QUÉ NECESITAS PARA EMPEZAR?
                  </span>
                </div>
                <div>
                  <ul className="detalles-certificacion-lista">
                    {certificacion.contenidoCompleto.queNecesitas.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle className="icono incluye" aria-label="Necesitas" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {certificacion.contenidoCompleto?.itinerario && (
            <section className="detalles-section itinerario-section">
              <h2 className="section-title">ITINERARIO</h2>
              <div className="itinerario-container">
                {certificacion.contenidoCompleto.itinerario.slice(itinerarioStartIndex, itinerarioStartIndex + 3).map((dia) => (
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
            </section>
          )}

          <section className="imagen-destacada-container">
            <div className="imagen-destacada-content">
              <div className="imagenes-destacadas-grid">
                <div className="imagen-destacada-card">
                  <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1768679712/felo-divers/imagenes/img25_cpaznk.jpg" 
                    alt="Imagen destacada 1"
                    className="imagen-destacada"
                  />
                </div>
                <div className="imagen-destacada-card">
                  <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1768679709/felo-divers/imagenes/img21_ncowz5.jpg" 
                    alt="Imagen destacada 2"
                    className="imagen-destacada"
                  />
                </div>
                <div className="imagen-destacada-card">
                  <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1768680382/felo-divers/imagenes/img45_l7sttn.jpg" 
                    alt="Imagen destacada 3"
                    className="imagen-destacada"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Botones de acción finales 
          <section className="detalles-section acciones-section">
            <div className="botones-finales">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                {t('item.add_to_cart_button')}
              </button>
              <button className="btn-reserve-final" onClick={handleContactar}>
                Solicitar Información
              </button>
            </div>
          </section>*/}

          {/* DESCRIPCIÓN DEL PAQUETE + Incluye/No Incluye */}
          {(certificacion.contenidoCompleto?.incluye || certificacion.contenidoCompleto?.noIncluye) && (
            <section className="detalles-section incluye-section">
              <div className="descripcion-incluye-grid">
                <div className="descripcion-paquete-titulo">
                  <span className="icono-descripcion" aria-label="info">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="#333" strokeWidth="2"/>
                      <circle cx="8" cy="8" r="1" fill="#333"/>
                      <rect x="7" y="11" width="10" height="2" rx="1" fill="#333"/>
                      <rect x="7" y="15" width="7" height="2" rx="1" fill="#333"/>
                    </svg>
                  </span>
                  <span className="descripcion-paquete-texto">
                    DESCRIPCIÓN DEL CURSO
                  </span>
                </div>
                <div className="incluye-noincluye-flex">
                  {certificacion.contenidoCompleto?.incluye && (
                    <div>
                      <h3 className="detalles-certificacion-titulo">Incluye</h3>
                      <ul className="detalles-certificacion-lista">
                        {certificacion.contenidoCompleto.incluye.map((item, index) => (
                          <li key={index}>
                            <FaCheckCircle className="icono incluye" aria-label="Incluye" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {certificacion.contenidoCompleto?.noIncluye && (
                    <div>
                      <h3 className="detalles-certificacion-titulo">No incluye</h3>
                      <ul className="detalles-certificacion-lista">
                        {certificacion.contenidoCompleto.noIncluye.map((item, index) => (
                          <li key={index}>
                            <FaTimesCircle className="icono no-incluye" aria-label="No incluye" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* CTA Final */}
          <section className="cta-final">
            <h3>¡Inicia tu camino como buceador profesional!</h3>
            <p>Obtén tu certificación PADI con los mejores instructores de San Andrés</p>
            <p className="cupos-limitados">¡CUPOS LIMITADOS!</p>
            <div className="botones-finales">
              <button className="btn-reserve-final" onClick={handleContactar}>
                Solicitar Información
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetallesCertificacion;
