/**
 * Middleware factory para validar request body con un schema Zod.
 * @param {import('zod').ZodSchema} schema
 */
export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        msg: "Error de validación",
        errors: result.error.errors.map((e) => ({
          campo: e.path.join("."),
          mensaje: e.message,
        })),
      });
    }
    req.body = result.data;
    next();
  };
}
