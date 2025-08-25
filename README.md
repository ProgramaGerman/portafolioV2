# Portfolio Personal - German González

Un portafolio web moderno y responsivo desarrollado con React, TypeScript y Vite.

## 🚀 Características

- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Modo Oscuro/Claro**: Alternancia entre temas con transiciones suaves
- **Animaciones**: Efecto de escritura automática en la sección "Sobre Mí"
- **Carrusel de Habilidades**: Desplazamiento infinito de tecnologías
- **Accesibilidad**: Implementación de buenas prácticas de accesibilidad web
- **TypeScript**: Tipado estático para mayor robustez del código
- **Optimizado**: Build optimizado con Vite para mejor rendimiento

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Estilos**: CSS3 con variables personalizadas
- **Iconos**: Font Awesome
- **Linting**: ESLint con configuración para React y TypeScript

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio del proyecto
cd portfolio

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación y cambio de tema
│   ├── About.tsx       # Sección "Sobre Mí" con animación
│   ├── Habilidades.tsx # Carrusel de habilidades
│   └── Sociales.tsx    # Enlaces a redes sociales
├── assets/             # Recursos estáticos
│   ├── Logo.gif        # Logo animado
│   └── LogoVerde.webp  # Logo estático
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎨 Personalización

### Cambiar Información Personal
1. **Textos**: Edita los arrays de texto en `src/components/About.tsx`
2. **Enlaces Sociales**: Modifica las URLs en `src/components/Sociales.tsx`
3. **Habilidades**: Actualiza el array `skills` en `src/components/Habilidades.tsx`

### Cambiar Colores y Temas
Los colores se definen en `src/App.css` usando variables CSS:
- Modo claro: `#FFFFFF` (fondo), `#1E293B` (texto)
- Modo oscuro: `#121822` (fondo), `#FFFFFF` (texto)
- Acento: `#98CA3F` (verde)

### Agregar Nuevas Secciones
1. Crear un nuevo componente en `src/components/`
2. Importar y usar en `src/App.tsx`
3. Agregar enlace de navegación en `src/components/Header.tsx`

## 🌐 Despliegue

El proyecto está configurado para ser desplegado fácilmente en plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Cualquier servidor web estático

Simplemente ejecuta `npm run build` y despliega la carpeta `dist/`.

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## ♿ Accesibilidad

- Navegación por teclado
- Etiquetas ARIA apropiadas
- Contraste de colores adecuado
- Texto alternativo para imágenes
- Semántica HTML correcta

## 🐛 Solución de Problemas

### Error de TypeScript
Si encuentras errores de TypeScript, asegúrate de que todas las dependencias estén instaladas:
```bash
npm install
```

### Problemas de Build
Si el build falla, verifica que no haya errores de linting:
```bash
npm run lint
```

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como referencia para tu propio portafolio.

## 👨‍💻 Autor

**German González (ProgramaGerman)**
- GitHub: [@ProgramaGerman](https://github.com/ProgramaGerman)
- LinkedIn: [German Gonzalez](https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit)
- Instagram: [@amorgermcristo](https://www.instagram.com/amorgermcristo/)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!