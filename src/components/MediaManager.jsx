import React, { useState } from 'react';
import { useCloudinary } from '../hooks/useCloudinary';
import './MediaManager.css';

export default function MediaManager() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [error, setError] = useState('');
  const { uploadFile } = useCloudinary();

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setError('');
  };

  const handleUploadAll = async () => {
    if (files.length === 0) {
      setError('Por favor selecciona archivos');
      return;
    }

    setUploading(true);
    setUploadedUrls([]);
    const urls = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isVideo = file.type.startsWith('video');
        const folder = isVideo ? 'felo-divers/videos' : 'felo-divers/imagenes';

        const url = await uploadFile(file, folder);
        urls.push({
          name: file.name,
          url: url,
          type: isVideo ? 'video' : 'imagen'
        });
        setUploadedUrls([...urls]);
      }
      setError('');
      setFiles([]);
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    alert('URL copiada al portapapeles');
  };

  return (
    <div className="media-manager">
      <h2>📤 Gestor de Media - Cloudinary</h2>

      <div className="upload-section">
        <label className="file-input-label">
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            disabled={uploading}
            accept="image/*,video/*"
          />
          <span>Selecciona imágenes o videos</span>
        </label>

        {files.length > 0 && (
          <div className="files-preview">
            <h3>Archivos seleccionados ({files.length}):</h3>
            <ul>
              {files.map((file, idx) => (
                <li key={idx}>
                  {file.name} - {(file.size / 1024 / 1024).toFixed(2)} MB
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleUploadAll}
          disabled={files.length === 0 || uploading}
          className="upload-btn"
        >
          {uploading ? '⏳ Subiendo...' : `📤 Subir ${files.length} archivo(s)`}
        </button>

        {error && <div className="error-message">{error}</div>}
      </div>

      {uploadedUrls.length > 0 && (
        <div className="results-section">
          <h3>✅ Archivos subidos ({uploadedUrls.length}):</h3>
          <div className="urls-list">
            {uploadedUrls.map((item, idx) => (
              <div key={idx} className="url-item">
                <div className="url-info">
                  <span className="type-badge">{item.type}</span>
                  <span className="filename">{item.name}</span>
                </div>
                <div className="url-display">
                  <code>{item.url}</code>
                  <button
                    onClick={() => copyToClipboard(item.url)}
                    className="copy-btn"
                    title="Copiar URL"
                  >
                    📋
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="export-section">
            <h4>Próximos pasos:</h4>
            <ol>
              <li>Copia las URLs de arriba</li>
              <li>Actualiza las rutas en tus componentes</li>
              <li>Ejemplo: usar la URL en lugar de `/images/img01.jpg`</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
