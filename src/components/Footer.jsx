// src/components/Footer.jsx

import React from 'react';
import './Footer.css';
import { Button } from './Button.jsx'; // Usar .jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className='footer-container'>
            
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    
                    {/* ENLACES COLUMNA 1: MENÚ PRINCIPAL */}
                    <div className='footer-link-items'>
                        <h2>{t('footer_section.main_menu')}</h2>
                        <Link to='/'>{t('nav.home')}</Link>
                        <Link to='/campamentos'>{t('nav.camps')}</Link>
                        <Link to='/certificaciones'>{t('nav.certifications')}</Link>
                        <Link to='/experiencias'>{t('nav.experiences')}</Link>
                        <Link to='/viajes'>{t('nav.trips')}</Link>
                        <Link to='/equipo'>{t('nav.team')}</Link>
                    </div>
                    
                    {/* ENLACES COLUMNA 2: MÁS INFORMACIÓN */}
                    <div className='footer-link-items'>
                        <h2>{t('footer_section.more_info')}</h2>
                        <Link to='/politicas'>{t('footer_section.policies')}</Link>
                        <a href='https://www.tripadvisor.co/Attraction_Review-g297482-d15561384-Reviews-Felo_Divers-San_Andres_Island_San_Andres_and_Providencia_Department.html' target='_blank' rel='noopener noreferrer'>TripAdvisor</a>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    
                    {/* ENLACES COLUMNA 3: UBICACIÓN */}
                    <div className='footer-link-items'>
                        <h2>{t('footer_section.where_we_are')}</h2>
                        <a href='https://www.google.com/maps/place/La+casa+de+Felo+Divers/data=!4m2!3m1!1s0x0:0xadf163417c0bbc5c?sa=X&ved=1t:2428&ictx=111' target='_blank' rel='noopener noreferrer'>
                            <span dangerouslySetInnerHTML={{ __html: t('footer_section.location') }} />
                        </a>
                    </div>
                    
                    {/* ENLACES COLUMNA 4: CONTACTO */}
                    <div className='footer-link-items'>
                        <h2>{t('footer_section.contact')}</h2>
                        <a href='https://www.facebook.com/felodivers' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-facebook-f' style={{ marginRight: '8px' }} />
                            Facebook
                        </a>
                        <a href='https://www.instagram.com/felodivers/' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-instagram' style={{ marginRight: '8px' }} />
                            Instagram
                        </a>
                        <a href='https://www.tiktok.com/@felodivers' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-tiktok' style={{ marginRight: '8px' }} />
                            TikTok
                        </a>
                        <a href='https://wa.me/573004018538' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-whatsapp' style={{ marginRight: '8px' }} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='https://res.cloudinary.com/felodivers/image/upload/v1767801474/felo-divers/imagenes/logo_xfv9h8.png' alt={t('alt_texts.logo_img')} className='social__logo-img' />
                        </Link>
                    </div>
                    
                    {/* Traducción del texto de derechos (Copyright) */}
                    <small className='website-rights'>{t('footer_section.copyright')}</small>
                    
                    {/* Íconos Sociales con enlaces a Felo Divers */}
                    <div className='social-icons'>
                        <a className='social-icon-link facebook' href='https://www.facebook.com/felodivers' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a className='social-icon-link instagram' href='https://www.instagram.com/felodivers/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </a>
                        <a className='social-icon-link tiktok' href='https://www.tiktok.com/@felodivers' target='_blank' rel='noopener noreferrer' aria-label='TikTok'>
                            <i className='fab fa-tiktok' />
                        </a>
                        <a className='social-icon-link whatsapp' href='https://wa.me/573004018538' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
                            <i className='fab fa-whatsapp' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;