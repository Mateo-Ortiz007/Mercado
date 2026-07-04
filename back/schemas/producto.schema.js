import { z } from "zod";

export const productoSchema = z.object({
  nombre: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  tipo: z
    .string({ required_error: "El tipo es obligatorio" })
    .min(2, "El tipo debe tener al menos 2 caracteres")
    .max(50, "El tipo no puede exceder 50 caracteres"),
  precio: z
    .string()
    .or(z.number())
    .transform((val) => Number(val))
    .refine((val) => val > 0, "El precio debe ser mayor a 0"),
  unidades: z
    .string()
    .or(z.number())
    .transform((val) => Number(val))
    .refine((val) => val >= 0, "Las unidades no pueden ser negativas"),
});
