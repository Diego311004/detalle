# Página romántica

Proyecto estático en HTML, CSS y JS con carrusel de imágenes, frases y poema.

## Estructura
- `index.html`: página principal
- `css/styles.css`: estilos románticos y responsivos
- `js/main.js`: lógica del carrusel y frases
- `assets/`: coloca aquí tus fotos

## Cómo usar
1. Copia tus fotos a la carpeta `assets/` (ej.: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`).
2. Abre `js/main.js` y edita el arreglo `slidesData` para que apunte a tus archivos y cambies los textos.
3. Abre `index.html` en el navegador (doble clic o arrastrar al navegador).

## Personalización rápida
- Cambia título y subtítulo en `index.html`.
- Reescribe el poema en la sección "Poema para ti" de `index.html`.
- Agrega/edita frases en el arreglo `phrases` de `js/main.js`.

## Notas
- El carrusel tiene autoplay, flechas, puntos y gestos táctiles.
- Recomendadas imágenes horizontales o cuadradas para mejor encuadre.

## Despliegue en Render

### Opción 1: Desde GitHub (Recomendado)
1. Sube tu proyecto a GitHub
2. Ve a [render.com](https://render.com) y crea una cuenta
3. Haz clic en "New +" → "Web Service"
4. Conecta tu repositorio de GitHub
5. Configuración:
   - **Name**: `pagina-romantica`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
6. Haz clic en "Create Web Service"

### Opción 2: Desde archivos locales
1. Comprime toda la carpeta del proyecto en un ZIP
2. Ve a [render.com](https://render.com)
3. Haz clic en "New +" → "Web Service"
4. Selecciona "Upload ZIP"
5. Sube tu archivo ZIP
6. Configuración:
   - **Name**: `pagina-romantica`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

### Notas importantes
- Render detectará automáticamente que es un sitio estático
- El archivo `package.json` ya está configurado para Render
- Tu sitio estará disponible en una URL como: `https://pagina-romantica.onrender.com`

## Créditos
- Google Fonts: Great Vibes, Poppins.
- Desplegado en Render.com
