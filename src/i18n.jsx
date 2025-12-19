import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. Importa tus archivos de traducción.
// Los crearemos en el Paso 2
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

// Recursos de traducción: Mapea los códigos de idioma ('es', 'en') a los archivos JSON.
const resources = {
  es: {
    translation: translationES // 'translation' es el namespace por defecto
  },
  en: {
    translation: translationEN
  }
};

i18n
  // Detecta el idioma del usuario (navegador o URL)
  .use(LanguageDetector) 
  // Conecta i18next con React
  .use(initReactI18next) 
  .init({
    resources,
    // Idioma por defecto si no detecta uno o si la clave no existe
    fallbackLng: 'es', 
    // Namespace: usamos 'translation' por defecto
    defaultNS: 'translation',
    
    // Configuración general
    interpolation: {
      escapeValue: false // Necesario para que React pueda renderizar HTML/JSX
    },
    
    // Configuración para que el detector guarde la preferencia del usuario
    detection: {
      caches: ['localStorage'], // Guarda la preferencia del idioma en el almacenamiento local
    }
  });

export default i18n;