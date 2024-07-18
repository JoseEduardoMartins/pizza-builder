import { z } from "zod";

export const pizzaSchema = z.object({
  size: z
    .string({ message: "Tamanho é obrigatorio" })
    .refine((size) => !isNaN(Number(size)), { message: "Tamanho invalido." })
    .transform((size) => Number(size))
    .refine((size) => size > 0, { message: "Tamanho invalido." }),
  flavor: z
    .string({ message: "Sabor é obrigatorio" })
    .refine((size) => !isNaN(Number(size)), { message: "Sabor invalido." })
    .transform((flavor) => Number(flavor))
    .refine((flavor) => flavor > 0, { message: "Sabor invalido." }),
  customizations: z
    .array(
      z
        .string({ message: "Personalização é obrigatorio" })
        .refine((val) => !isNaN(Number(val)), {
          message: "Personalização invalida.",
        })
        .transform((val) => Number(val))
        .refine((val) => val > 0, { message: "Personalização invalid." })
    )
    .optional(),
});
