import { z } from "zod";

export const userSchema = z
    .object({
        id: z.number(),
        name: z.string(),
        pseudo: z.string(),
        password: z.string(),
    })
    .strict();

export const userSchemaAdd = userSchema.omit({
    id: true,
});
export const userSchemaUpdate = userSchemaAdd.partial();
export const userSchemaLogin = userSchemaAdd.omit({
    name: true,
});

export const userQuerySchema = z
    .object({
        id: z.coerce.number().optional(),
        name: z.string().optional(),
        pseudo: z.string().optional(),
    })
    .strict();
export const findUserSchema = userQuerySchema.omit({ id: true });
