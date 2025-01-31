import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("O Email informado não é valido"),
  password: z.string().min(5, { message: "A Senha digitada é menor do que o esperado" }),
})
.transform((data) => ({
  email: data.email,
  password: data.password,
}));

export type LoginSchema = z.infer<typeof LoginSchema>;