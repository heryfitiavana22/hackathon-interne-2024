import { z } from 'zod';

export const alertSchema = z
  .object({
    id: z.number(),
    place: z.string(),
    imageURL: z.string(),
    state: z.string().optional(),
    latitude: z.number().transform((arg) => arg.toString()),
    longitude: z.number().transform((arg) => arg.toString()),
    truckId: z.number().optional(),
  })
  .strict();

export const alertSchemaAdd = alertSchema.omit({
  id: true,
});
export const alertSchemaUpdate = alertSchemaAdd.partial();

export const alertQuerySchema = z.object({}).strict();
export const findUserSchema = alertQuerySchema.omit({ id: true });
