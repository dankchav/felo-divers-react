import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

// Contextos y Hooks
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next'; 
import { useAuth } from '../context/AuthContext'; // Para Login/Logout

function Navbar() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    
    // Hooks de Contexto
    const { isCartOpen, toggleCart, closeCart } = useCart(); 
    const { isLoggedIn, logout } = useAuth(); // Estado de la sesión
    
    // Estados Locales
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [searchActive, setSearchActive] = useState(false); 
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el input de búsqueda

    // ======================================
    // HANDLERS
    // ======================================

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton); 
        return () => window.removeEventListener('resize', showButton); 
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };
    
    const currentLangDisplay = i18n.language.toUpperCase().substring(0, 2);

    const handleToggleCart = () => {
        closeMobileMenu();
        setSearchActive(false);
        toggleCart(); 
    };

    const handleLogout = () => {
        closeMobileMenu();
        logout(); // Cierra la sesión globalmente
        navigate('/'); // Redirige al inicio
    };

    const handleSearchClick = (e) => {
        // Si ya está activo y hay texto, tratamos como envío (para botón móvil)
        if (searchActive && searchTerm.trim()) {
            handleSearchSubmit(e);
        }
        
        // Alternar el estado de la barra
        setSearchActive(prevActive => !prevActive); 
        if (!searchActive) {
            closeMobileMenu(); 
            closeCart();
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
        const trimmedSearchTerm = searchTerm.trim();
        
        if (trimmedSearchTerm) {
            // Navegar a la página de resultados con el parámetro de consulta
            navigate(`/search?query=${encodeURIComponent(trimmedSearchTerm)}`);
            
            // Limpiar y cerrar la interfaz de búsqueda
            setSearchTerm('');
            setSearchActive(false);
            closeMobileMenu();
        } else {
            // Si el campo está vacío, solo cierra la barra de búsqueda
            setSearchActive(false);
        }
    };

    // ======================================
    // RENDERIZADO
    // ======================================

    return (
        <>
            <header className='main-header-container'> 
                
                {/* === BARRA SUPERIOR: LOGO Y HERRAMIENTAS === */}
                <nav className='navbar top-bar'>
                    <div className='navbar-container'>
                        
                        {/* Logo (se oculta en modo búsqueda) */}
                        {!searchActive && (
                            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                                <img src='images/logo.png' alt={t('alt.logo')} className='navbar__logo-img' />
                            </Link>
                        )}
                        
                        {/* CONTENEDOR DE HERRAMIENTAS */}
                        <div className={`navbar-tools ${searchActive ? 'search-mode' : ''}`}>
                            
                            {/* 1. BARRA DE BÚSQUEDA */}
                            <form className='navbar__search' onSubmit={handleSearchSubmit}>
                                <input 
                                    type='text' 
                                    placeholder={t('search.placeholder')} 
                                    className={`search-input ${searchActive ? 'expanded' : ''}`} 
                                    autoFocus={searchActive}
                                    value={searchTerm} 
                                    onChange={(e) => setSearchTerm(e.target.value)} 
                                />
                                <i 
                                    className={searchActive ? 'fas fa-times search-close-icon' : 'fas fa-search search-icon'} 
                                    onClick={handleSearchClick}
                                />
                                {/* Botón invisible para permitir el envío con Enter */}
                                {searchActive && <button type='submit' style={{ display: 'none' }} />}
                            </form>
                            
                            {/* Herramientas que se ocultan en modo búsqueda */}
                            {!searchActive && (
                                <>
                                    {/* 2. SELECCIÓN DE IDIOMA */}
                                    <button className='navbar__language-toggle' onClick={toggleLanguage}>
                                        <i className='fas fa-globe' /> {currentLangDisplay}
                                    </button>
                                    
                                    {/* 3. CARRITO DE COMPRAS */}
                                    <button  className='navbar__cart-icon' onClick={handleToggleCart}>
                                        <i className='fas fa-shopping-cart' />
                                    </button>

                                    {/* 4. ÍCONO DE INGRESO/SALIR (Lógica de autenticación) */}
                                    {button && (
                                        isLoggedIn ? (
                                            // Botón SALIR (si está logueado)
                                            <button className='navbar__login-icon' onClick={handleLogout}> 
                                                <i className='fas fa-sign-out-alt' />
                                            </button>
                                        ) : (
                                            // Enlace INGRESAR (si no está logueado)
                                            <Link to='/sign-up' className='navbar__login-icon' onClick={closeMobileMenu}> 
                                                <i className='fas fa-user-circle' />
                                            </Link>
                                        )
                                    )}
                                </>
                            )}

                        </div>
                        
                        {/* Ícono de menú para móvil */}
                        {!searchActive && (
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                        )}
                        
                    </div>
                </nav>
                
                {/* === SEGUNDA BARRA: MENÚ DE OPCIONES === */}
                <nav className='navbar menu-bar'>
                    <div className='menu-container'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>{t('nav.home')}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/campamentos' className='nav-links' onClick={closeMobileMenu}>{t('nav.camps')}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/certificaciones' className='nav-links' onClick={closeMobileMenu}>{t('nav.certifications')}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/experiencias' className='nav-links' onClick={closeMobileMenu}>{t('nav.experiences')}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/viajes' className='nav-links' onClick={closeMobileMenu}>{t('nav.trips')}</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/equipo' className='nav-links' onClick={closeMobileMenu}>{t('nav.team')}</Link>
                            </li>
                            
                            {/* Enlace móvil de Sign Up / Logout */}
                            <li>
                                {isLoggedIn ? (
                                    <button className='nav-links-mobile' onClick={handleLogout}>{t('nav.logout')}</button>
                                ) : (
                                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>{t('nav.signup')}</Link>
                                )}
                            </li>
                        </ul>
                        
                    </div>
                </nav>

            </header>
            <CartSidebar isOpen={isCartOpen} />
        </>
    );
}

export default Navbar;