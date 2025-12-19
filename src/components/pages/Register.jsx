import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer.jsx'; // Importar el Footer
import './Auth.css';
import '../../App.css';

function Register() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // ... (Lógica de handleChange y handleSubmit OMITIDA POR BREVEDAD)
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError(t('auth.error_password_match'));
            setLoading(false);
            return;
        }

        // Lógica de Registro con Backend (Simulación)
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1500);
    };


    const RegisterContent = () => {
        if (success) {
            return (
                <div className='auth-content'>
                    <h1 className='success-title'>{t('auth.signup_success_title')}</h1>
                    <p>{t('auth.signup_success_message')}</p>
                    <Link to='/sign-up' className='auth-link'>{t('auth.go_to_login')}</Link>
                </div>
            );
        }

        return (
            <div className='auth-content'>
                <h1 className='auth-title'>{t('page_titles.register')}</h1> 

                <form className='auth-form' onSubmit={handleSubmit}>
                    {/* Campos del formulario... */}
                    <input type='text' name='name' placeholder={t('auth.name_placeholder')} value={formData.name} onChange={handleChange} required />
                    <input type='email' name='email' placeholder={t('auth.email_placeholder')} value={formData.email} onChange={handleChange} required />
                    <input type='password' name='password' placeholder={t('auth.password_placeholder')} value={formData.password} onChange={handleChange} required />
                    <input type='password' name='confirmPassword' placeholder={t('auth.confirm_password_placeholder')} value={formData.confirmPassword} onChange={handleChange} required />

                    {error && <p className='error-message'>{error}</p>}

                    <button type='submit' className='btn--primary' disabled={loading}>
                        {loading ? t('auth.loading') : t('auth.register_button')}
                    </button>
                </form>

                <p className='auth-switch'>
                    {t('auth.already_have_account')}{' '}
                    {/* 5. Enlace a la página de Login principal (/sign-up) */}
                    <Link to='/sign-up'>{t('auth.login_link')}</Link> 
                </p>
            </div>
        );
    };

    return (
        <>
            <div className='auth-container'> 
                 <RegisterContent />
            </div>
            <Footer /> {/* 6. El Footer al final */}
        </>
    );
}

export default Register;