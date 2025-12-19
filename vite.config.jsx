// vite.config.js (Versión Corregida)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  esbuild: {
    loader: 'jsx', 
  },
  base: '/',
  build: {
    // Configura la ruta de entrada principal si no es src/index.js (si es necesario)
    rollupOptions: {
      input: 'src/index.jsx',
    },
  },
  // Configuración opcional para proxies o el servidor de desarrollo
  server: {
    port: 3000, // Usar el puerto 3000 habitual de React
  }
});