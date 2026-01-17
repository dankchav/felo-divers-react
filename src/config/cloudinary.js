// src/config/cloudinary.js

export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
};

// Función para construir URLs optimizadas de Cloudinary
export const getCloudinaryUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
  } = options;

  let url = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/`;

  if (width) url += `w_${width},`;
  if (height) url += `h_${height},`;
  if (crop) url += `c_${crop},`;

  url += `q_${quality},f_${format}/`;
  url += publicId;

  return url;
};

// Función para construir URLs de videos
export const getCloudinaryVideoUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
  } = options;

  let url = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload/`;

  if (width) url += `w_${width},`;
  if (height) url += `h_${height},`;

  url += `q_${quality}/`;
  url += publicId;

  return url;
};
