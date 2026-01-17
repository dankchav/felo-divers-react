// src/hooks/useCloudinary.js

import { useState } from 'react';
import { cloudinaryConfig } from '../config/cloudinary';

export const useCloudinary = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadFile = async (file, folder = 'felo-divers') => {
    // Validar que existan las credenciales
    if (!cloudinaryConfig.cloudName || !cloudinaryConfig.uploadPreset) {
      throw new Error('Las credenciales de Cloudinary no están configuradas. Revisa tu .env.local');
    }

    setLoading(true);
    setError(null);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);
    formData.append('folder', folder);
    formData.append('resource_type', 'auto'); // Auto detecta si es imagen, video, etc

    try {
      const xhr = new XMLHttpRequest();

      // Rastrear progreso
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setUploadProgress(percentComplete);
        }
      });

      return new Promise((resolve, reject) => {
        // Manejo de éxito
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            setLoading(false);
            setUploadProgress(100);
            resolve(data.secure_url);
          } else {
            const errorData = JSON.parse(xhr.responseText);
            const errorMsg = errorData.error?.message || 'Error en respuesta del servidor';
            setError(errorMsg);
            setLoading(false);
            reject(new Error(errorMsg));
          }
        });

        // Manejo de error
        xhr.addEventListener('error', () => {
          setError('Error al subir el archivo');
          setLoading(false);
          reject(new Error('Error de red'));
        });

        xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/auto/upload`);
        xhr.send(formData);
      });
    } catch (err) {
      console.error('Error en uploadFile:', err);
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return {
    uploadFile,
    loading,
    error,
    uploadProgress,
  };
};
