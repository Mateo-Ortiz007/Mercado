import { z } from "zod";

export const proveedorSchema = z.object({
  nombre: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  empresa: z
    .string({ required_error: "La empresa es obligatoria" })
    .min(2, "La empresa debe tener al menos 2 caracteres")
    .max(100, "La empresa no puede exceder 100 caracteres"),
  tipodeproductos: z
    .string({ required_error: "El tipo de productos es obligatorio" })
    .min(2, "El tipo debe tener al menos 2 caracteres")
    .max(100, "El tipo no puede exceder 100 caracteres"),
});
