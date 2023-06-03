import { z } from "zod";

export const schema = z.object({
  email: z.string().email("É necessario inserir um email valido."),
  password: z.string().nonempty("Este campo é obrigatorio!"),
});

export type LoginData = z.infer<typeof schema>;
