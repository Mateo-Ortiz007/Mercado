# DO BRONX — E-commerce de Ropa Urbana

E-commerce moderno de ropa streetwear desarrollado con React + Vite. Diseñado para la comunidad urbana ecuatoriana.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Node](https://img.shields.io/badge/Node-Express%205-green)

---

## Demo

Levantá el proyecto localmente y accedé a `http://localhost:5173/`

---

## Stack Tecnológico

### Frontend
- **React 19** — Librería UI con componentes funcionales y hooks
- **Vite 7** — Bundler ultrarrápido con HMR
- **React Router DOM 7** — Enrutamiento SPA
- **CSS Modules** — Estilos por componente, sin colisiones

### Backend (preparado, no requerido para el frontend)
- **Express 5** — Framework HTTP
- **MySQL 2** — Base de datos con connection pool
- **JWT** — Autenticación con tokens
- **Zod** — Validación de schemas
- **Multer** — Upload de imágenes
- **Bcrypt** — Hashing de contraseñas

---

## Estructura del Proyecto

```
├── front/src/
│   ├── components/        # Componentes reutilizables (Header, Navbar, Footer, ProductCard)
│   ├── pages/             # Páginas completas (Home, Producto, Carrito, Favoritos, Cuenta, Info)
│   ├── data/              # Datos mock (productos)
│   ├── App.jsx            # Router + estado global (carrito, favoritos, dark mode)
│   ├── App.css            # Layout principal
│   └── index.css          # Variables CSS + dark mode + reset
│
├── back/
│   ├── routes/            # Endpoints REST (productos, proveedores, login, register)
│   ├── middlewares/       # Auth JWT, validación Zod, error handler
│   ├── schemas/           # Schemas de validación (Zod)
│   ├── config/            # Configuración Multer (uploads)
│   ├── db.js              # Connection pool MySQL
│   └── index.js           # Entry point del servidor
│
├── .gitignore
├── package.json           # Dependencias frontend
├── vite.config.js
└── index.html
```

---

## Funcionalidades

### Tienda (Frontend)
- ✅ Catálogo de productos con imágenes, precios y descuentos
- ✅ Filtrado por categorías (Remeras, Pantalones, Buzos, Camperas, Zapatillas, Accesorios)
- ✅ Página de detalle con selector de talla y color
- ✅ Carrito de compras funcional (agregar, cambiar cantidad, eliminar)
- ✅ Sistema de favoritos
- ✅ Dark mode con persistencia en localStorage
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Navegación SPA sin recargas

### Páginas informativas
- ✅ Sobre Nosotros — Historia y valores de la marca
- ✅ Envíos — Tiempos, métodos y cobertura en Ecuador
- ✅ Cambios y Devoluciones — Política de 15 días
- ✅ Guía de Talles — Tablas de medidas para todas las categorías

### Backend (API REST)
- ✅ JWT Authentication con refresh
- ✅ Middleware de autorización por roles (admin/usuario)
- ✅ Validación de inputs con Zod en todos los endpoints
- ✅ Connection pool MySQL (10 conexiones concurrentes)
- ✅ Rate limiting en rutas de auth (anti brute-force)
- ✅ Error handler global con logging
- ✅ Upload de imágenes con validación de tipo y tamaño (máx 5MB)
- ✅ CORS configurado por origen

---

## Instalación

### Requisitos previos
- Node.js 18+
- npm 9+
- MySQL 8+ (solo si querés usar el backend)

### Frontend (solo tienda)

```bash
# Clonar el repositorio
git clone https://github.com/Mateo-Ortiz007/Mercado.git
cd Mercado

# Instalar dependencias
npm install

# Levantar en desarrollo
npm run dev
```

Abrí `http://localhost:5173/` en tu browser.

### Backend (opcional)

```bash
cd back

# Instalar dependencias
npm install

# Configurar variables de entorno
# Creá un archivo back/.env con:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=tu_password
# DB_NAME=DoBronx
# DB_PORT=3306
# PORT=3000
# JWT_SECRET=tu_clave_secreta_aqui
# JWT_EXPIRES_IN=24h

# Crear la base de datos
mysql -u root -p -e "CREATE DATABASE DoBronx;"

# Crear tablas
mysql -u root -p DoBronx < sql/schema.sql

# Levantar servidor
node index.js
```

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Levanta el frontend en modo desarrollo (HMR) |
| `npm run build` | Build de producción optimizado |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## Diseño

### Paleta de colores

| Variable | Light | Dark |
|----------|-------|------|
| Background | `#fafafa` | `#0f0f0f` |
| Surface | `#ffffff` | `#1a1a1a` |
| Text | `#111111` | `#f0f0f0` |
| Accent | `#111111` | `#f0f0f0` |
| Highlight | `#e63946` | `#ff4d5a` |
| Success | `#2d6a4f` | `#4ade80` |

### Tipografía
- **Font:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800

### Componentes UI
- Cards con hover lift + zoom de imagen
- Chips de selección (tallas, colores)
- Tags de estado (NUEVO, descuento %)
- Botones con transiciones suaves
- Navbar con scroll horizontal en mobile
- Footer de 4 columnas responsive

---

## Precios

Los precios están en **USD** (dólar estadounidense), moneda oficial de Ecuador.
Rango: $12.99 — $65.00

---

## Autor

**Mateo Ortiz**  
📍 Ecuador

---

## Licencia

Este proyecto es de uso educativo y personal.
