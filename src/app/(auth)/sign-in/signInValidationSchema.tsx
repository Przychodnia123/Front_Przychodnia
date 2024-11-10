import { z } from "zod";

export const SignInValidationSchema = z
  .object({
    email: z.string().email("Nieprawidłowy adres e-mail"),
    password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
});
