// src/components/CloudinaryUpload.jsx

import React, { useState } from 'react';
import { useCloudinary } from '../hooks/useCloudinary';
import './CloudinaryUpload.css';

function CloudinaryUpload({ onUploadSuccess, folder = 'felo-divers', type = 'image' }) {
  const { uploadFile, loading, error, uploadProgress } = useCloudinary();
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Mostrar preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);

    try {
      const url = await uploadFile(file, folder);
      console.log(`${type} subido exitosamente:`, url);
      if (onUploadSuccess) {
        onUploadSuccess(url);
      }
    } catch (err) {
      console.error('Error al subir:', err);
    }
  };

  return (
    <div className="cloudinary-upload">
      <div className="upload-input-wrapper">
        <input
          type="file"
          id="cloudinary-input"
          onChange={handleFileSelect}
          disabled={loading}
          accept={type === 'image' ? 'image/*' : 'video/*'}
          className="upload-input"
        />
        <label htmlFor="cloudinary-input" className="upload-label">
          {loading ? `Subiendo... ${Math.round(uploadProgress)}%` : `Seleccionar ${type}`}
        </label>
      </div>

      {previewUrl && (
        <div className="preview-wrapper">
          {type === 'image' ? (
            <img src={previewUrl} alt="Preview" className="preview" />
          ) : (
            <video src={previewUrl} controls className="preview" />
          )}
        </div>
      )}

      {error && <p className="error-message">❌ Error: {error}</p>}
      
      {loading && <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${uploadProgress}%` }} />
      </div>}
    </div>
  );
}

export default CloudinaryUpload;
