# 🎬 Guía de Configuración Cloudinary

## Paso 1: Crear cuenta en Cloudinary

1. Ve a https://cloudinary.com/users/register/free
2. Regístrate con tu email
3. Confirma tu email
4. Completa el perfil

## Paso 2: Obtener Cloud Name

1. Ve al Dashboard: https://cloudinary.com/console/
2. En la parte superior, verás tu **Cloud Name** (algo como: `dv6abc123xyz`)
3. Cópialo

## Paso 3: Crear Upload Preset

1. En el Dashboard, ve a **Settings** (rueda de engranaje)
2. Selecciona pestaña **Upload**
3. Baja hasta **Upload presets**
4. Haz click en **Add upload preset**
5. Llena:
   - **Preset name**: `felo_divers` (o el que prefieras)
   - **Signing Mode**: `Unsigned` ✅ (IMPORTANTE)
6. Click en **Save**
7. Cópialo

## Paso 4: Actualizar .env.local

En tu archivo `.env.local`:

```
REACT_APP_CLOUDINARY_CLOUD_NAME=tu_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=felo_divers
```

## Paso 5: Reinicia tu servidor

```bash
npm start
```

## Uso en componentes

### Ejemplo 1: Subir una imagen

```javascript
import CloudinaryUpload from './CloudinaryUpload';

function MiComponente() {
  const handleUploadSuccess = (url) => {
    console.log('Imagen subida:', url);
    // Hacer algo con la URL
  };

  return (
    <CloudinaryUpload
      folder="felo-divers/imagenes"
      type="image"
      onUploadSuccess={handleUploadSuccess}
    />
  );
}
```

### Ejemplo 2: Subir un video

```javascript
import CloudinaryUpload from './CloudinaryUpload';

function HeroSection() {
  const [videoUrl, setVideoUrl] = useState('/videos/video01.mp4');

  return (
    <>
      <video src={videoUrl} autoPlay loop muted />
      
      <CloudinaryUpload
        folder="felo-divers/videos"
        type="video"
        onUploadSuccess={setVideoUrl}
      />
    </>
  );
}
```

### Ejemplo 3: Usar URLs optimizadas

```javascript
import { getCloudinaryUrl, getCloudinaryVideoUrl } from '../config/cloudinary';

// Para imágenes
<img src={getCloudinaryUrl('felo-divers/imagenes/hero', {
  width: 1200,
  height: 600,
  quality: 'auto'
})} />

// Para videos
<video src={getCloudinaryVideoUrl('felo-divers/videos/intro', {
  width: 1280,
  height: 720
})} />
```

## Limites del plan gratis

- 10 GB de almacenamiento
- 20 GB de transferencia mensual
- Uploads ilimitados
- Transformaciones ilimitadas
- CDN global

## Soporte

Si necesitas ayuda:
- Documentación oficial: https://cloudinary.com/documentation
- Panel de control: https://cloudinary.com/console
