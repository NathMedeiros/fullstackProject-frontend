import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty({ message: "O nome é obrigatório." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  phone: z.string().nonempty({ message: "O telefone é obrigatório." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
});

export type RegisterData = z.infer<typeof schema>;
