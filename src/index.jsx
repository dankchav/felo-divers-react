import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { CartProvider } from './context/CartContext';

import './i18n'; // Asegúrate de que esta línea esté, si usas i18next

// 2. Encuentra el contenedor y crea la raíz
const container = document.getElementById('root');
const root = createRoot(container); 

// 3. Renderiza la aplicación en la nueva raíz (sin la coma después de </React.StrictMode>)
root.render(
 <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);