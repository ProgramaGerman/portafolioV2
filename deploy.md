
# Guía de Despliegue

## 🚀 Opciones de Despliegue

### 1. Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para despliegues posteriores
vercel --prod
```

### 2. Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Construir el proyecto
npm run build

# Desplegar
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages
1. Instalar gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agregar scripts al package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configurar base en vite.config.ts:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/nombre-del-repositorio/'
})
```

4. Desplegar:
```bash
npm run deploy
```

### 4. Servidor Web Tradicional
```bash
# Construir para producción
npm run build

# Subir la carpeta 'dist' a tu servidor web
# Los archivos en 'dist' son estáticos y pueden servirse desde cualquier servidor
```

## 🔧 Configuraciones Adicionales

### Variables de Entorno
Si necesitas variables de entorno, crea un archivo `.env`:
```
VITE_API_URL=https://tu-api.com
VITE_ANALYTICS_ID=tu-id-analytics
```

### Optimizaciones de SEO
1. Actualizar meta tags en `index.html`
2. Agregar sitemap.xml
3. Configurar robots.txt
4. Implementar Open Graph tags

### Configuración de Dominio Personalizado
Para usar un dominio personalizado, agrega un archivo `CNAME` en la carpeta `public/` con tu dominio:
```
tudominio.com
```

## 📊 Monitoreo y Analytics
Considera agregar:
- Google Analytics
- Google Search Console
- Herramientas de monitoreo de rendimiento

## 🔒 Seguridad
- Configurar HTTPS
- Implementar Content Security Policy (CSP)
- Configurar headers de seguridad apropiados