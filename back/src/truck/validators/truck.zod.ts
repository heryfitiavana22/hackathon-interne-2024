import { z } from 'zod';

export const truckSchema = z
  .object({
    id: z.number(),
    pseudo: z.string(),
    password: z.string(),
  })
  .strict();

export const truckSchemaAdd = truckSchema.omit({
  id: true,
});
export const truckSchemaUpdate = truckSchemaAdd.partial();
export const truckSchemaLogin = truckSchemaAdd.omit({});

export const truckQuerySchema = z
  .object({
    id: z.coerce.number().optional(),
    name: z.string().optional(),
    pseudo: z.string().optional(),
  })
  .strict();
export const findUserSchema = truckQuerySchema.omit({ id: true });
