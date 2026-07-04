/**
 * Middleware global de manejo de errores.
 * Captura cualquier error no manejado en las rutas.
 */
export function errorHandler(err, req, res, _next) {
  console.error("❌ Error no manejado:", {
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    url: req.originalUrl,
    method: req.method,
  });

  // Error de Zod (validación)
  if (err.name === "ZodError") {
    return res.status(400).json({
      msg: "Error de validación",
      errors: err.errors.map((e) => ({
        campo: e.path.join("."),
        mensaje: e.message,
      })),
    });
  }

  // Error de Multer (archivos)
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ msg: "Archivo demasiado grande (máx 5MB)" });
  }

  if (err.code === "LIMIT_UNEXPECTED_FILE") {
    return res.status(400).json({ msg: "Campo de archivo inesperado" });
  }

  // Error genérico
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    msg: statusCode === 500 ? "Error interno del servidor" : err.message,
  });
}
