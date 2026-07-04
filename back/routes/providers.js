import express from "express";
import { pool } from "../db.js";
import { verifyToken, requireAdmin } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { proveedorSchema } from "../schemas/proveedor.schema.js";

const router = express.Router();

// GET — público
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM proveedores");
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// POST — solo admin
router.post(
  "/",
  verifyToken,
  requireAdmin,
  validate(proveedorSchema),
  async (req, res, next) => {
    try {
      const { nombre, empresa, tipodeproductos } = req.body;

      const [result] = await pool.query(
        "INSERT INTO proveedores (nombre, empresa, tipodeproductos) VALUES (?, ?, ?)",
        [nombre, empresa, tipodeproductos],
      );

      res.status(201).json({ id: result.insertId, msg: "Proveedor creado" });
    } catch (err) {
      next(err);
    }
  },
);

// PUT — solo admin
router.put(
  "/:id",
  verifyToken,
  requireAdmin,
  validate(proveedorSchema),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nombre, empresa, tipodeproductos } = req.body;

      const [result] = await pool.query(
        "UPDATE proveedores SET nombre=?, empresa=?, tipodeproductos=? WHERE id=?",
        [nombre, empresa, tipodeproductos, id],
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ msg: "Proveedor no encontrado" });
      }

      res.json({ msg: "Proveedor actualizado" });
    } catch (err) {
      next(err);
    }
  },
);

// DELETE — solo admin
router.delete("/:id", verifyToken, requireAdmin, async (req, res, next) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM proveedores WHERE id=?",
      [req.params.id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Proveedor no encontrado" });
    }

    res.json({ msg: "Proveedor eliminado" });
  } catch (err) {
    next(err);
  }
});

export default router;
