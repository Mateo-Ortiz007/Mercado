import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import productosRoutes from "./routes/productos.js";
import proveedoresRoutes from "./routes/providers.js";
import loginRoutes from "./routes/login.js";
import registerRoutes from "./routes/register.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

// CORS — restringido a orígenes permitidos
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173", "http://localhost:3000"],
    credentials: true,
  }),
);

// Body parsing
app.use(express.json({ limit: "10mb" }));

// Rate limiting en rutas de auth (previene brute force)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // máximo 10 intentos
  message: { msg: "Demasiados intentos. Intenta de nuevo en 15 minutos." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Archivos estáticos (uploads)
app.use("/uploads", express.static("uploads"));

// Rutas
app.use("/login", authLimiter, loginRoutes);
app.use("/register", authLimiter, registerRoutes);
app.use("/productos", productosRoutes);
app.use("/proveedores", proveedoresRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ msg: `Ruta ${req.method} ${req.path} no encontrada` });
});

// Error handler global (DEBE ir al final)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
