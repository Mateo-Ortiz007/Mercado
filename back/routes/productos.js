import express from "express";
import { upload } from "../config/multer.js";
import { pool } from "../db.js";
import { verifyToken, requireAdmin } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { productoSchema } from "../schemas/producto.schema.js";

const router = express.Router();

// GET — público
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
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
  upload.single("imagen"),
  async (req, res, next) => {
    try {
      // Validar campos del body (excluyendo el archivo)
      const result = productoSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          msg: "Error de validación",
          errors: result.error.errors.map((e) => ({
            campo: e.path.join("."),
            mensaje: e.message,
          })),
        });
      }

      const { nombre, tipo, unidades, precio } = result.data;
      const imagen = req.file?.filename || null;

      const [dbResult] = await pool.query(
        "INSERT INTO productos (nombre, tipo, unidades, precio, imagen) VALUES (?, ?, ?, ?, ?)",
        [nombre, tipo, unidades, precio, imagen],
      );

      res.status(201).json({ id: dbResult.insertId, msg: "Producto creado" });
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
  upload.single("imagen"),
  async (req, res, next) => {
    try {
      const result = productoSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          msg: "Error de validación",
          errors: result.error.errors.map((e) => ({
            campo: e.path.join("."),
            mensaje: e.message,
          })),
        });
      }

      const { id } = req.params;
      const { nombre, tipo, unidades, precio } = result.data;

      let sql = "UPDATE productos SET nombre=?, tipo=?, unidades=?, precio=?";
      const values = [nombre, tipo, unidades, precio];

      if (req.file) {
        sql += ", imagen=?";
        values.push(req.file.filename);
      }

      sql += " WHERE id=?";
      values.push(id);

      const [dbResult] = await pool.query(sql, values);

      if (dbResult.affectedRows === 0) {
        return res.status(404).json({ msg: "Producto no encontrado" });
      }

      res.json({ msg: "Producto actualizado" });
    } catch (err) {
      next(err);
    }
  },
);

// DELETE — solo admin
router.delete("/:id", verifyToken, requireAdmin, async (req, res, next) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM productos WHERE id=?",
      [req.params.id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    res.json({ msg: "Producto eliminado" });
  } catch (err) {
    next(err);
  }
});

export default router;
