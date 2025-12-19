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
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    {/* Traducción del encabezado de suscripción */}
                    {t('footer.subscription_heading')}
                </p>
                <p className='footer-subscription-text'>
                    {/* Traducción del texto de suscripción */}
                    {t('footer.subscription_text')}
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            // Traducción del placeholder
                            placeholder={t('footer.email_placeholder')} 
                        />
                        {/* Traducción del botón */}
                        <Button buttonStyle='btn--outline'>{t('footer.subscribe_button')}</Button>
                    </form>
                </div>
            </section>
            
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    
                    {/* ENLACES COLUMNA 1: SOBRE NOSOTROS */}
                    <div className='footer-link-items'>
                        <h2>{t('footer.headings.about_us')}</h2>
                        <Link to='/sign-up'>{t('footer.links.how_it_works')}</Link>
                        <Link to='/'>{t('footer.links.testimonials')}</Link>
                        <Link to='/'>{t('footer.links.careers')}</Link>
                        <Link to='/'>{t('footer.links.investors')}</Link>
                        <Link to='/'>{t('footer.links.terms')}</Link>
                    </div>
                    
                    {/* ENLACES COLUMNA 2: CONTACTO */}
                    <div className='footer-link-items'>
                        <h2>{t('footer.headings.contact_us')}</h2>
                        <Link to='/'>{t('footer.links.contact')}</Link>
                        <Link to='/'>{t('footer.links.support')}</Link>
                        <Link to='/'>{t('footer.links.destinations')}</Link>
                        <Link to='/'>{t('footer.links.sponsorships')}</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    
                    {/* ENLACES COLUMNA 3: MEDIA */}
                    <div className='footer-link-items'>
                        <h2>{t('footer.headings.videos')}</h2>
                        <Link to='/'>{t('footer.links.submit_video')}</Link>
                        <Link to='/'>{t('footer.links.ambassadors')}</Link>
                        <Link to='/'>{t('footer.links.agency')}</Link>
                        <Link to='/'>{t('footer.links.influencer')}</Link>
                    </div>
                    
                    {/* ENLACES COLUMNA 4: REDES SOCIALES (Los textos no se traducen) */}
                    <div className='footer-link-items'>
                        <h2>{t('footer.headings.social_media')}</h2>
                        <Link to='//instagram.com' target='_blank'>Instagram</Link>
                        <Link to='//facebook.com' target='_blank'>Facebook</Link>
                        <Link to='//youtube.com' target='_blank'>Youtube</Link>
                        <Link to='//twitter.com' target='_blank'>Twitter</Link>
                    </div>
                </div>
            </div>
            
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='images/logo.png' alt={t('alt_texts.logo_img')} className='social__logo-img' />
                        </Link>
                    </div>
                    
                    {/* Traducción del texto de derechos (Copyright) */}
                    <small className='website-rights'>{t('footer.rights')} {new Date().getFullYear()}</small>
                    
                    {/* Íconos Sociales (Usando íconos de ejemplo) */}
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='//facebook.com' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' to='//instagram.com' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link youtube' to='//youtube.com' target='_blank' aria-label='Youtube'>
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link className='social-icon-link twitter' to='//twitter.com' target='_blank' aria-label='Twitter'>
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link className='social-icon-link linkedin' to='//linkedin.com' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;