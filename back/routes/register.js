import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { validate } from "../middlewares/validate.js";
import { registerSchema } from "../schemas/auth.schema.js";
import { verifyToken, requireAdmin } from "../middlewares/auth.js";

const router = express.Router();

// GET: obtener todos los usuarios (solo admin)
router.get("/", verifyToken, requireAdmin, async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombreDeUsuario, ApellidoDelUsuario, DocumentoDelUsuario, telefono, genero, email, rol FROM usuarios",
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// POST: registrar usuario (público)
router.post("/", validate(registerSchema), async (req, res, next) => {
  try {
    const {
      nombreDeUsuario,
      ApellidoDelUsuario,
      DocumentoDelUsuario,
      telefono,
      genero,
      email,
      password,
    } = req.body;

    // Verificar si el email ya existe
    const [existing] = await pool.query(
      "SELECT id FROM usuarios WHERE email = ?",
      [email],
    );

    if (existing.length > 0) {
      return res.status(409).json({ msg: "El email ya está registrado" });
    }

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO usuarios 
      (nombreDeUsuario, ApellidoDelUsuario, DocumentoDelUsuario, telefono, genero, email, password, rol)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nombreDeUsuario,
        ApellidoDelUsuario,
        DocumentoDelUsuario,
        telefono,
        genero,
        email,
        hash,
        "usuario",
      ],
    );

    res.status(201).json({ msg: "Usuario registrado" });
  } catch (err) {
    next(err);
  }
});

export default router;
