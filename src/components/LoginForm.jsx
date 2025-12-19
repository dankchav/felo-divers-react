import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { useAuth } from '../context/AuthContext'; // Pendiente

function LoginForm() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    // Lógica y estados (formData, loading, error) OMITIDOS POR BREVEDAD, SON LOS MISMOS QUE ANTES

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        // Lógica de Ingreso con Backend (Simulación)
        setTimeout(() => {
            setLoading(false);
            if (formData.email !== 'test@example.com') {
                setError(t('auth.error_invalid_credentials'));
            } else {
                navigate('/'); 
            }
        }, 1500);
    };

    return (
        <div className='auth-content'>
            <h1 className='auth-title'>{t('page_titles.login')}</h1>

            <form className='auth-form' onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder={t('auth.email_placeholder')} value={formData.email} onChange={handleChange} required />
                <input type='password' name='password' placeholder={t('auth.password_placeholder')} value={formData.password} onChange={handleChange} required />

                {error && <p className='error-message'>{error}</p>}

                <button type='submit' className='btn--primary' disabled={loading}>
                    {loading ? t('auth.loading') : t('auth.login_button')}
                </button>
            </form>

            <p className='auth-switch'>
                {t('auth.no_account')}{' '}
                {/* 1. Enlace al nuevo componente Register.jsx */}
                <Link to='/register'>{t('auth.register_link')}</Link> 
            </p>
        </div>
    );
}

export default LoginForm;