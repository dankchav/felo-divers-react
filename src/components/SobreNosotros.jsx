import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SobreNosotros.css';

function SobreNosotros() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentHouseReviewIndex, setCurrentHouseReviewIndex] = useState(0);

  const carouselImages = [
    'https://via.placeholder.com/500x400?text=Buceo+1',
    'https://via.placeholder.com/500x400?text=Buceo+2',
    'https://via.placeholder.com/500x400?text=Buceo+3',
    'https://via.placeholder.com/500x400?text=Buceo+4',
  ];

  const destinoImages = [
    'https://via.placeholder.com/500x400?text=San+Andres+1',
    'https://via.placeholder.com/500x400?text=San+Andres+2',
    'https://via.placeholder.com/500x400?text=Providencia+1',
    'https://via.placeholder.com/500x400?text=Providencia+2',
  ];

  const reviews = [
    {
      name: 'Luz Angela Torres Arcos',
      rating: 5,
      text: 'Excelente servicio, muy puntuales, responsables y profesionales.',
      location: 'Colombia'
    },
    {
      name: 'Natalia Vergara Marín',
      rating: 5,
      text: 'Excelente experiencia, el acompañamiento y la explicación de todo, fue increíble! Los instructores súper amables y divertidos. Hacen que el proceso sea muy tranquilo. San Andrés es un excelente lugar para bucear, y aún más con felo. Toman unas fotos increíbles.',
      location: 'Colombia'
    },
    {
      name: 'Marce Ruiz C',
      rating: 5,
      text: 'Súper recomendado! De las mejores experiencias que he tenido, algo que para mí es primordial es sentirme segura y desde el primer momento así fue, gracias a la amabilidad, paciencia y profesionalismo de Talero y Felo. Vamos por más 💪',
      location: 'Colombia'
    },
    {
      name: 'James Edogawa Quimba',
      rating: 5,
      text: 'Excelente la experiencia. Feliz explica muy bien en piscina, luego la explicación de ingreso al mar. Pero ahí es donde comienza la magia, Felo es súper vacano en el mar. Superaron todas mis expectativas 👏👏👏',
      location: 'Colombia'
    },
    {
      name: 'Auxilio Ramírez Pérez',
      rating: 5,
      text: 'La mejor y más divertida experiencia con Felo Divers. Muy buen servicio, amabilidad y respeto en el trato. A la hora de bajar a las profundidades marinas los mejores! Buena planeación de las inmersiones. Los mejores en San Andrés 🤿🌊💯',
      location: 'Colombia'
    },
    {
      name: 'Natalia Grisales',
      rating: 5,
      text: 'Cuando decidimos bucear en San Andrés buscamos el mejor lugar. Encontramos el centro de buceo de Felo y desde el primer contacto supimos que era el lugar indicado. Durante toda la inmersión nos sentimos súper seguros. Fue muy increíble, difícil de olvidar 🌊🤿',
      location: 'Colombia'
    },
    {
      name: 'Andrea Tovar',
      rating: 5,
      text: 'Una experiencia transformadora. Los instructores de Felo Divers te hacen sentir completamente seguro y cómodo. La atención al detalle y la pasión por el buceo es evidente en cada momento. ¡Totalmente recomendado!',
      location: 'Colombia'
    },
    {
      name: 'Martina La Peligrosa',
      rating: 5,
      text: 'No hay palabras para describir lo increíble que fue bucear con Felo Divers. La dedicación de los instructores, la seguridad y la diversión combinadas crean la experiencia perfecta. San Andrés es hermoso y ellos lo hacen aún mejor.',
      location: 'Colombia'
    },
    {
      name: 'Camila Restrepo G',
      rating: 5,
      text: 'Mis amigas y yo bucamos con Felo Divers y fue la mejor decisión. Los instructores son profesionales, amables y muy atentos. Las fotos quedaron espectaculares. Definitivamente volveremos.',
      location: 'Colombia'
    },
    {
      name: 'Daniela Tapia',
      rating: 5,
      text: 'Experiencia de buceo de clase mundial. El equipo de Felo Divers demuestra verdadera pasión por el buceo y el cuidado marino. Cada detalle está pensado para tu seguridad y diversión. Altamente recomendado.',
      location: 'Colombia'
    },
    {
      name: 'Jacinta Jaramillo',
      rating: 5,
      text: 'La calidad del servicio en Felo Divers es inigualable. Los instructores son expertos, amables y dedicados. La experiencia bajo el agua fue mágica. Ya estoy planeando mi próximo viaje para bucear nuevamente.',
      location: 'Colombia'
    },
    {
      name: 'Camila Jurado Pérez',
      rating: 5,
      text: 'Como actriz he viajado mucho, pero esta experiencia con Felo Divers fue única. Los instructores son profesionales de verdad. La combinación de seguridad, diversión y belleza natural hace de Felo Divers el mejor lugar para bucear.',
      location: 'Colombia'
    },
    {
      name: 'Alexandra Rodríguez',
      rating: 5,
      text: 'Tras visitar muchos destinos de buceo, puedo confirmar que Felo Divers es excepcional. Los instructores son pacientes, expertos y genuinamente preocupados por tu experiencia. San Andrés con Felo Divers es simplemente perfecto.',
      location: 'Colombia'
    },
    {
      name: 'Escapadas.co',
      rating: 5,
      text: 'Para cualquiera que quiera vivir una auténtica experiencia de buceo en el Caribe, Felo Divers es la opción definitiva. Profesionalismo, pasión y un toque humano que los hace únicos. Nuestros seguidores los aman.',
      location: 'Colombia'
    },
    {
      name: 'Meli Bardet',
      rating: 5,
      text: 'Como travel vlogger, he documentado muchas experiencias, pero bucear con Felo Divers fue verdaderamente especial. Los instructores son apasionados, el equipo es de primera calidad y la experiencia es inolvidable. Lo recomiendo sin dudas.',
      location: 'Colombia'
    },
    {
      name: 'Carlos Mendez',
      rating: 5,
      text: 'Primera vez buceando y Felo Divers hizo que fuera perfecto. Paso a paso, muy seguros, instructores increíbles. Ahora soy un buceador certificado gracias a ellos. Una verdadera transformación personal.',
      location: 'Colombia'
    },
    {
      name: 'Sofía Blanco',
      rating: 5,
      text: 'El nivel de profesionalismo y cuidado en Felo Divers es incomparable. Cada instrumento verifica, cada movimiento es controlado, cada momento es seguro. Confía totalmente en tu seguridad y en tu crecimiento como buceador.',
      location: 'Colombia'
    },
    {
      name: 'Roberto Sánchez',
      rating: 5,
      text: 'Llevo 25 años buceando y Felo Divers es el mejor centro que he conocido. La combinación de seguridad, experiencia, pasión y cuidado ambiental es rara de encontrar. Cada buceo con ellos es una masterclass.',
      location: 'Colombia'
    },
    {
      name: 'Valeria López',
      rating: 5,
      text: 'Mi familia y yo hicimos nuestras certificaciones con Felo Divers. Fue la mejor inversión en experiencias que pudimos haber hecho. Los instructores se adaptan a cada persona, a tu ritmo, a tus miedos. Simplemente perfectos.',
      location: 'Colombia'
    },
    {
      name: 'Fernando García',
      rating: 5,
      text: 'Después de bucear en varios destinos del Caribe, sin dudas Felo Divers es el mejor. No solo la calidad del buceo, sino la atención, la seguridad y el genuino interés en tu experiencia los hace únicos. Volveré seguro.',
      location: 'Colombia'
    }
  ];

  const houseReviews = [
    {
      name: 'María José Díaz',
      rating: 5,
      text: 'La Casa de Felo Divers es increíble. El alojamiento es cómodo, limpio y acogedor. La comida raizal preparada con amor cada día fue lo mejor. ¡Nos sentimos como en familia!',
      location: 'Colombia'
    },
    {
      name: 'Juan Rodríguez Soto',
      rating: 5,
      text: 'Hospedarse en la casa de Felo Divers es una experiencia única. Las habitaciones son limpias y cómodas, el ambiente es familiar y la atención es de primera. ¡Volveré sin dudas!',
      location: 'Colombia'
    },
    {
      name: 'Patricia Gómez',
      rating: 5,
      text: 'La comida raizal es deliciosa y auténtica. Las manos de doña preparan cada plato con cariño. Las instalaciones son excelentes, modernas y muy limpias. El ambiente es perfecto para disfrutar con otros buzadores.',
      location: 'Colombia'
    },
    {
      name: 'Roberto Camacho',
      rating: 5,
      text: 'El alojamiento en la Casa de Felo Divers es espectacular. Habitaciones amplias, cómodas, buena agua caliente y aire acondicionado. La comida típica es exquisita. El personal muy atento y amable.',
      location: 'Colombia'
    },
    {
      name: 'Silvia Montoya',
      rating: 5,
      text: 'Fue maravilloso estar en la casa. El ambiente familiar, la calidez de la gente, la comida sabrosa y las comodidades. Todo pensado para que te sientas cómodo después de bucear. ¡Volvería mañana!',
      location: 'Colombia'
    },
    {
      name: 'Lucas Fernández',
      rating: 5,
      text: 'La casa es un oasis en San Andrés. Amplias, limpias, seguras. La comida raizal es de primera calidad. El ambiente permite conocer gente de todo el mundo. Es como un segundo hogar.',
      location: 'Colombia'
    },
    {
      name: 'Valentina Santos',
      rating: 5,
      text: 'Alojarse aquí fue parte integral de mi experiencia. No solo buceamos, sino que convivimos con una comunidad de buzadores apasionados. La casa facilita eso perfectamente. Excelente atención.',
      location: 'Colombia'
    },
    {
      name: 'Felipe Herrera',
      rating: 5,
      text: 'La Casa de Felo Divers superó todas mis expectativas. Confort, limpieza, seguridad y gastronomía raizal de calidad. El personal es atento, amable y siempre está pendiente de tus necesidades.',
      location: 'Colombia'
    },
    {
      name: 'Carolina López',
      rating: 5,
      text: 'Desde el momento en que llegué, me sentí como en casa. Las habitaciones son acogedoras, el servicio es excelente, y la comida raizal es simplemente deliciosa. ¡Definitivamente vuelvo!',
      location: 'Colombia'
    },
    {
      name: 'Miguel Ángel Ruiz',
      rating: 5,
      text: 'Experiencia integral perfecta. La casa ofrece todas las comodidades, limpieza impecable, comidas sabrosas y un ambiente que facilita hacer amistades internacionales. Lo recomiendo ampliamente.',
      location: 'Colombia'
    },
    {
      name: 'Gabriela Vega',
      rating: 5,
      text: 'La casa es hermosa, acogedora y muy bien mantenida. La comida típica es deliciosa y abundante. El personal es amable y atento. Así es como debería ser el buceo residencial.',
      location: 'Colombia'
    },
    {
      name: 'Diego Morales',
      rating: 5,
      text: 'Alojamiento de clase mundial en una casa que funciona como comunidad. Cómodas habitaciones, excelente comida raizal, ambiente seguro y acogedor. El lugar perfecto para buceadores.',
      location: 'Colombia'
    },
    {
      name: 'Marcela Rivera',
      rating: 5,
      text: 'La Casa de Felo Divers es un lugar especial. No solo los servicios de buceo, sino la experiencia completa de alojamiento, comida y ambiente familiar. ¡Es incomparable!',
      location: 'Colombia'
    },
    {
      name: 'Andrés Quiñones',
      rating: 5,
      text: 'Habitaciones amplias y limpias, aire acondicionado, agua caliente. La comida raizal es increíble, hecha con productos frescos. El ambiente permite conectar con otros buzadores del mundo. Perfecto.',
      location: 'Colombia'
    },
    {
      name: 'Teresa Díaz',
      rating: 5,
      text: 'La hospitalidad raizal es real aquí. Las habitaciones son cómodas, la comida exquisita, y el ambiente propicio para descansar después de emocionantes buceos. ¡Una verdadera joya!',
      location: 'Colombia'
    },
    {
      name: 'Javier Sánchez',
      rating: 5,
      text: 'Instalaciones modernas, limpias y bien cuidadas. Comida típica sabrosa y variada. Personal atento y profesional. La Casa de Felo Divers es el complemento perfecto para el buceo.',
      location: 'Colombia'
    },
    {
      name: 'Rosario Guzmán',
      rating: 5,
      text: 'Un lugar acogedor donde conviven buzadores de diferentes países. Las habitaciones son cómodas, la comida raizal es auténtica y deliciosa. El personal muy dedicado y amable.',
      location: 'Colombia'
    },
    {
      name: 'Cristian Mendoza',
      rating: 5,
      text: 'La casa es espectacular. Limpia, moderna, cómoda. La comida raizal es de verdad, preparada con ingredientes frescos y técnica. El ambiente familiar es lo que más me marcó.',
      location: 'Colombia'
    },
    {
      name: 'Lorena Páez',
      rating: 5,
      text: 'Hospedarse en la Casa de Felo Divers fue la mejor decisión. Habitaciones confortables, comida deliciosa, servicio excelente y ambiente único. ¡No tengo palabras para describirlo!',
      location: 'Colombia'
    },
    {
      name: 'Marcos Esteban',
      rating: 5,
      text: 'Todo perfecto en la casa: limpieza impecable, habitaciones cómodas, agua caliente garantizada, comida raizal exquisita, personal amable. Es el lugar ideal para buceadores en San Andrés.',
      location: 'Colombia'
    }
  ];

  // Auto-advance reviews every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Auto-advance house reviews every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHouseReviewIndex((prev) => (prev + 1) % houseReviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [houseReviews.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destinoImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destinoImages.length) % destinoImages.length);
  };

  const razones = [
    {
      icon: <i className='fas fa-trophy'></i>,
      title: t('about.por_que_elegirnos.experience.title'),
      description: t('about.por_que_elegirnos.experience.description')
    },
    {
      icon: <i className='fas fa-globe'></i>,
      title: t('about.por_que_elegirnos.location.title'),
      description: t('about.por_que_elegirnos.location.description')
    },
    {
      icon: <i className='fas fa-users'></i>,
      title: t('about.por_que_elegirnos.community.title'),
      description: t('about.por_que_elegirnos.community.description')
    },
    {
      icon: <i className='fas fa-leaf'></i>,
      title: t('about.por_que_elegirnos.marine_care.title'),
      description: t('about.por_que_elegirnos.marine_care.description')
    },
    {
      icon: <i className='fas fa-check-circle'></i>,
      title: t('about.por_que_elegirnos.certifications.title'),
      description: t('about.por_que_elegirnos.certifications.description')
    },
    {
      icon: <i className='fas fa-star'></i>,
      title: t('about.por_que_elegirnos.trips.title'),
      description: t('about.por_que_elegirnos.trips.description')
    }
  ];

  return (
    <>
      <section className="sobre-nosotros-container">
        <div className="sobre-nosotros-content">
          
          {/* Primera sección: Sobre Nosotros con imagen */}
          <h2 className="sobre-nosotros-main-title">{t('sobrenosotros.main_title')} <span className="highlight">FELO DIVERS</span></h2>
          <div className="sobre-nosotros-wrapper">
            <div className="sobre-nosotros-text-section">
              <p className="sobre-nosotros-text">
                {t('sobrenosotros.description_part1')}
              </p>
              <p className="sobre-nosotros-text">
                {t('sobrenosotros.description_part2')}
              </p>
            </div>
            <div className="sobre-nosotros-image">
              <div className="razones-grid">
                {razones.map((razon, index) => (
                  <div key={index} className="razon-card">
                    <div className="razon-icon">
                      {razon.icon}
                    </div>
                    <h3>{razon.title}</h3>
                    <p>{razon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séptima sección: Reseñas de La Casa de Felo Divers */}
      <section className="house-reviews-section">
        <div className="house-reviews-container">
          <h2 className="house-reviews-title">{t('house_reviews.title')} <span className="highlight">LA CASA DE FELO DIVERS</span></h2>
          
          <div className="house-reviews-carousel">
            <div className="house-review-card">
              <div className="house-review-header">
                <div className="house-review-stars">
                  {[...Array(houseReviews[currentHouseReviewIndex].rating)].map((_, i) => (
                    <i key={i} className='fas fa-star'></i>
                  ))}
                </div>
                <div className="house-review-info">
                  <h3 className="house-review-name">{houseReviews[currentHouseReviewIndex].name}</h3>
                  <p className="house-review-location">
                    <i className='fas fa-home'></i>
                    {houseReviews[currentHouseReviewIndex].location}
                  </p>
                </div>
              </div>
              
              <p className="house-review-text">
                "{houseReviews[currentHouseReviewIndex].text}"
              </p>
              
              <div className="house-review-indicator">
                <span className="current-house-review">{currentHouseReviewIndex + 1}</span>
                <span className="total-house-reviews">/ {houseReviews.length}</span>
              </div>
            </div>

            <div className="house-reviews-controls">
              <button 
                className="house-review-nav-button prev"
                onClick={() => setCurrentHouseReviewIndex((prev) => (prev - 1 + houseReviews.length) % houseReviews.length)}
              >
                ‹
              </button>
              <button 
                className="house-review-nav-button next"
                onClick={() => setCurrentHouseReviewIndex((prev) => (prev + 1) % houseReviews.length)}
              >
                ›
              </button>
            </div>

            <div className="house-reviews-dots">
              {houseReviews.map((_, index) => (
                <button
                  key={index}
                  className={`house-review-dot ${index === currentHouseReviewIndex ? 'active' : ''}`}
                  onClick={() => setCurrentHouseReviewIndex(index)}
                  aria-label={`House Review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="house-reviews-cta">
            <p>{t('house_reviews.cta')}</p>
          </div>
        </div>
      </section>

      {/* Cuarta sección: Imagen destacada */}
      <section className="imagen-destacada-container">
        <div className="imagen-destacada-content">
          <div className="imagenes-destacadas-grid">
            <div className="imagen-destacada-card">
              <img 
                src="https://res.cloudinary.com/felodivers/image/upload/v1767801473/felo-divers/imagenes/img01_sb90nh.jpg" 
                alt="Imagen destacada 1"
                className="imagen-destacada"
              />
            </div>
            <div className="imagen-destacada-card">
              <img 
                    src="https://res.cloudinary.com/felodivers/image/upload/v1767801473/felo-divers/imagenes/img01_sb90nh.jpg" 
                alt="Imagen destacada 2"
                className="imagen-destacada"
              />
            </div>
            <div className="imagen-destacada-card">
              <img 
                src="https://res.cloudinary.com/felodivers/image/upload/v1767801473/felo-divers/imagenes/img01_sb90nh.jpg" 
                alt="Imagen destacada 3"
                className="imagen-destacada"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quinta sección: Carrusel + Texto SAI y Providencia */}
      <section className="destino-section">
        <div className="destino-container">
          {/* Carrusel a la izquierda */}
          <div className="destino-carrusel">
            <div className="carrusel-wrapper">
              <img 
                src={destinoImages[currentImageIndex]} 
                alt="Destino de buceo"
                className="carrusel-image"
              />
              <button className="carrusel-button prev" onClick={prevImage}>
                ❮
              </button>
              <button className="carrusel-button next" onClick={nextImage}>
                ❯
              </button>
              <div className="carrusel-indicators">
                {destinoImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="destino-texto">
            <h2 className="destino-title">{t('destinations.title')} <span className="highlight">SAI Y PROVIDENCIA</span>?</h2>
            <p className="destino-paragraph">
              {t('destinations.p1')}
            </p>
            <p className="destino-paragraph">
              {t('destinations.p2')}
            </p>
            <p className="destino-paragraph">
              {t('destinations.p3')}
            </p>
            <p className="destino-paragraph">
              {t('destinations.p4')}
            </p>
          </div>
        </div>
      </section>

      {/* Sexta sección: Comentarios de Google */}
      <section className="reviews-section">
        <div className="reviews-container">
          <h2 className="reviews-title">{t('reviews.title')} <span className="highlight">BUZOS</span></h2>
          
          <div className="reviews-carousel">
            <div className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                    <i key={i} className='fas fa-star'></i>
                  ))}
                </div>
                <div className="review-info">
                  <h3 className="review-name">{reviews[currentReviewIndex].name}</h3>
                  <p className="review-location">
                    <i className='fas fa-map-marker-alt'></i>
                    {reviews[currentReviewIndex].location}
                  </p>
                </div>
              </div>
              
              <p className="review-text">
                "{reviews[currentReviewIndex].text}"
              </p>
              
              <div className="review-indicator">
                <span className="current-review">{currentReviewIndex + 1}</span>
                <span className="total-reviews">/ {reviews.length}</span>
              </div>
            </div>

            <div className="reviews-controls">
              <button 
                className="review-nav-button prev"
                onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
              >
                ‹
              </button>
              <button 
                className="review-nav-button next"
                onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)}
              >
                ›
              </button>
            </div>

            <div className="reviews-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`review-dot ${index === currentReviewIndex ? 'active' : ''}`}
                  onClick={() => setCurrentReviewIndex(index)}
                  aria-label={`Review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="reviews-cta">
            <p>{t('reviews.cta')}</p>
          </div>
        </div>
      </section>

      {/* Séptima sección: Nuestras Redes */}
      <section className="social-networks-section">
        <div className="social-networks-container">
          <h2 className="social-networks-title">{t('social_networks.title')} <span className="highlight">REDES</span></h2>
          
          <div className="social-networks-grid">
            {/* Facebook */}
            <div className="social-network-card">
              <div className="social-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop" 
                  alt={t('social_networks.facebook')}
                  className="social-content-image"
                />
                <div className="social-icon-overlay facebook-icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
              </div>
              <h3>{t('social_networks.facebook')}</h3>
              <p>{t('social_networks.facebook_desc')}</p>
              <a href="https://www.facebook.com/felodivers" target="_blank" rel="noopener noreferrer" className="social-link">
                {t('social_networks.facebook_link')} <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Instagram */}
            <div className="social-network-card">
              <div className="social-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop" 
                  alt={t('social_networks.instagram')}
                  className="social-content-image"
                />
                <div className="social-icon-overlay instagram-icon">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
              <h3>{t('social_networks.instagram')}</h3>
              <p>{t('social_networks.instagram_desc')}</p>
              <a href="https://www.instagram.com/felodivers" target="_blank" rel="noopener noreferrer" className="social-link">
                {t('social_networks.instagram_link')} <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* TikTok */}
            <div className="social-network-card">
              <div className="social-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop" 
                  alt={t('social_networks.tiktok')}
                  className="social-content-image"
                />
                <div className="social-icon-overlay tiktok-icon">
                  <i className="fab fa-tiktok"></i>
                </div>
              </div>
              <h3>{t('social_networks.tiktok')}</h3>
              <p>{t('social_networks.tiktok_desc')}</p>
              <a href="https://www.tiktok.com/@felodivers" target="_blank" rel="noopener noreferrer" className="social-link">
                {t('social_networks.tiktok_link')} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Sección de invitación a comunidad */}
          <div className="community-invitation">
            <div className="community-content">
              <h3 className="community-title">{t('social_networks.community_title')}</h3>
              <p className="community-text">
                {t('social_networks.community_text')}
              </p>
              <a href="https://www.instagram.com/felodivers" target="_blank" rel="noopener noreferrer" className="community-button">
                {t('social_networks.community_button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SobreNosotros;
