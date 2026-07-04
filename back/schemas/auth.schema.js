import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "El email es obligatorio" })
    .email("Email inválido"),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, "La contraseña es obligatoria"),
});

export const registerSchema = z.object({
  nombreDeUsuario: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres"),
  ApellidoDelUsuario: z
    .string({ required_error: "El apellido es obligatorio" })
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede exceder 50 caracteres"),
  DocumentoDelUsuario: z
    .string({ required_error: "El documento es obligatorio" })
    .min(5, "El documento debe tener al menos 5 caracteres")
    .max(20, "El documento no puede exceder 20 caracteres"),
  telefono: z
    .string({ required_error: "El teléfono es obligatorio" })
    .min(7, "El teléfono debe tener al menos 7 dígitos")
    .max(15, "El teléfono no puede exceder 15 caracteres"),
  genero: z.enum(["M", "F"], {
    required_error: "El género es obligatorio",
    invalid_type_error: "Género debe ser M o F",
  }),
  email: z
    .string({ required_error: "El email es obligatorio" })
    .email("Email inválido"),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(100, "La contraseña no puede exceder 100 caracteres"),
});
