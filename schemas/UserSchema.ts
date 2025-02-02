import { z } from "zod";

export const UserSchema = z
  .object({
    email: z.string().email("O Email informado não é valido"),
    senha: z.string().min(5, { message: "A Senha digitada é menor do que o esperado" }),
    contraSenha: z.string().min(5, { message: "A Senha digitada é menor do que o esperado" }),
    nome: z.string(),
    telefone: z
      .string()
      .refine(
        (phone) => phone.replace(/\D/g, "").length >= 10,
        { message: "O Telefone está incorreto. Formato esperado: Ex: (11) 9xxxx-xxxx" }
      ),
    cpf: z
      .string()
      .optional()
      .or(z.literal("")) 
      .refine(
        (cpf) => cpf === "" || cpf?.replace(/\D/g, "").length === 11,
        { message: "O CPF informado é inválido." }
      ),
      birthDate: z
      .date()
      .refine(
        (date) => date instanceof Date && !isNaN(date.getTime()), // Valida se é uma data válida
        { message: "A data de nascimento informada é inválida." }
      )
      .transform((date) => new Date(date).toISOString().split('T')[0]),
  })
  .refine(
    (fields) => fields.senha === fields.contraSenha,
    { path: ["contraSenha"], message: "As senhas precisam ser iguais." }
  ) 
  .transform((data) => ({
    email: data.email,
    password: data.senha, // Mapeia o campo 'senha' para 'password'
    name: data.nome,
    cpf: data.cpf || undefined, // Remove o campo se estiver vazio
    phone: data.telefone,
    birthDate: data.birthDate,
    status: "ACTIVE", // Adiciona o status padrão
  }));

export type UserSchema = z.infer<typeof UserSchema>;