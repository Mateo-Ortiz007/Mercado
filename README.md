# DO BRONX — E-commerce de Ropa Urbana

Plataforma de comercio electrónico full-stack para una marca de ropa streetwear. Desarrollado como proyecto profesional que demuestra competencias en arquitectura frontend moderna, diseño de APIs REST seguras y experiencia de usuario completa.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## Vista Previa

| Home | Detalle Producto | Carrito |
|------|-----------------|---------|
| Catálogo con filtros por categoría, hero banner y grid responsive | Selector de talla/color, galería, descripción y CTA | Resumen con cantidades, subtotal y checkout |

---

## Características Principales

### Frontend
- **SPA con React 19** — Navegación fluida sin recargas de página
- **Catálogo dinámico** — Filtrado por categorías con navbar interactiva
- **Carrito de compras** — Gestión completa (agregar, modificar cantidad, eliminar)
- **Sistema de favoritos** — Guardado de productos con feedback visual
- **Dark/Light mode** — Toggle con persistencia en localStorage y transición suave
- **Responsive design** — Adaptado a mobile, tablet y desktop
- **Detalle de producto** — Selección de talla y color con validación antes de agregar
- **Páginas informativas** — Sobre nosotros, Envíos, Cambios/Devoluciones, Guía de Talles

### Backend (API REST)
- **Autenticación JWT** — Login con tokens, expiración configurable
- **Autorización por roles** — Middleware que protege rutas admin
- **Validación con Zod** — Schemas en cada endpoint (request body validation)
- **Connection Pool MySQL** — 10 conexiones concurrentes, queries async/await
- **Rate Limiting** — Protección contra brute-force en login/register
- **Error Handler Global** — Respuestas consistentes, logging estructurado
- **Upload de imágenes** — Multer con validación de tipo (jpg/png/webp) y tamaño (5MB)
- **CORS configurado** — Orígenes restringidos por ambiente

---

## Tecnologías Utilizadas

| Capa | Tecnología | Uso |
|------|-----------|-----|
| UI | React 19 + Vite 7 | Componentes funcionales, hooks, HMR |
| Routing | React Router DOM 7 | Navegación SPA, parámetros dinámicos |
| Estilos | CSS custom con variables | Design system propio, dark mode, responsive |
| Server | Express 5 (Node.js) | API REST, middlewares, static files |
| DB | MySQL 8 + mysql2/promise | Pool de conexiones, queries parametrizadas |
| Auth | JWT + Bcrypt | Tokens firmados, hash de contraseñas |
| Validación | Zod (front + back) | Schemas compartidos, type-safe |
| Upload | Multer | Almacenamiento local con filtros |
| Seguridad | express-rate-limit, CORS, helmet patterns | Anti brute-force, origin control |

---

## Arquitectura

```
┌─────────────────────────────────────────────────┐
│                   FRONTEND                       │
│  React 19 + Vite + React Router                 │
│                                                  │
│  components/  →  UI reutilizable                │
│  pages/       →  Vistas completas               │
│  data/        →  Mock data (productos)          │
│  App.jsx      →  Estado global + Router         │
└──────────────────────┬──────────────────────────┘
                       │ fetch + JWT Bearer
┌──────────────────────▼──────────────────────────┐
│                   BACKEND                        │
│  Express 5 + MySQL + JWT                        │
│                                                  │
│  routes/       →  Endpoints REST                │
│  middlewares/  →  Auth, Validate, ErrorHandler   │
│  schemas/      →  Zod schemas                   │
│  config/       →  Multer (uploads)              │
│  db.js         →  Connection Pool               │
└─────────────────────────────────────────────────┘
```

---

## Instalación y Ejecución

```bash
# Clonar
git clone https://github.com/Mateo-Ortiz007/Mercado.git
cd Mercado

# Frontend
npm install
npm run dev
# → http://localhost:5173/

# Backend (opcional, requiere MySQL)
cd back
npm install
# Crear archivo .env con credenciales de DB y JWT_SECRET
node index.js
# → http://localhost:3000/
```

---

## Endpoints de la API

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| POST | `/login` | ❌ | Autenticar usuario, retorna JWT |
| POST | `/register` | ❌ | Registrar nuevo usuario |
| GET | `/productos` | ❌ | Listar todos los productos |
| POST | `/productos` | Admin | Crear producto (multipart) |
| PUT | `/productos/:id` | Admin | Actualizar producto |
| DELETE | `/productos/:id` | Admin | Eliminar producto |
| GET | `/proveedores` | ❌ | Listar proveedores |
| POST | `/proveedores` | Admin | Crear proveedor |
| PUT | `/proveedores/:id` | Admin | Actualizar proveedor |
| DELETE | `/proveedores/:id` | Admin | Eliminar proveedor |

---

## Competencias Demostradas

- Desarrollo frontend con React (hooks, componentes, estado, routing)
- Diseño UI/UX responsive con CSS puro (sin frameworks)
- Implementación de dark mode con CSS custom properties
- Diseño e implementación de APIs REST
- Autenticación y autorización (JWT + roles)
- Validación de datos en cliente y servidor (Zod)
- Manejo de archivos (upload con validación)
- Seguridad web (rate limiting, CORS, input sanitization)
- Arquitectura de software (separación de capas, middlewares)
- Control de versiones con Git

---

## Autor

**Mateo Ortiz**  
Desarrollador Full-Stack  
📍 Ecuador  
🔗 [GitHub](https://github.com/Mateo-Ortiz007)
