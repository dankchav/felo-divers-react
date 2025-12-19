import React from 'react';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer.jsx'; 
import LoginForm from '../LoginForm.jsx'; // 2. Importar el formulario de Login
import './Auth.css'; 

function SignUp() { // Función que representa la página /sign-up
  const { t } = useTranslation();

  return (
    <>
      <div className='auth-container'> 
        <LoginForm />
      </div>
      <Footer /> 
    </>
  );
}

export default SignUp;