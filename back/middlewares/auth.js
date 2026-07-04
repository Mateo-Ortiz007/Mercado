import jwt from "jsonwebtoken";

/**
 * Middleware que verifica el token JWT.
 * Agrega req.user con { id, rol, nombre }
 */
export function verifyToken(req, res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Token no proporcionado" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token expirado" });
    }
    return res.status(401).json({ msg: "Token inválido" });
  }
}

/**
 * Middleware que requiere rol "admin".
 * Debe usarse DESPUÉS de verifyToken.
 */
export function requireAdmin(req, res, next) {
  if (req.user?.rol !== "admin") {
    return res.status(403).json({ msg: "Acceso denegado: se requiere rol admin" });
  }
  next();
}
