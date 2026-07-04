import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { pool } from "../db.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema } from "../schemas/auth.schema.js";

const router = express.Router();

router.post("/", validate(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email],
    );

    if (rows.length === 0) {
      return res.status(401).json({ msg: "Usuario no existe" });
    }

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }

    // Generar JWT
    const token = jwt.sign(
      { id: user.id, rol: user.rol || "usuario", nombre: user.nombreDeUsuario },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "24h" },
    );

    res.json({
      msg: "Login correcto",
      token,
      usuario: {
        id: user.id,
        nombre: user.nombreDeUsuario,
        email: user.email,
        rol: user.rol || "usuario",
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
