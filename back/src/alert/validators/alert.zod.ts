import { z } from 'zod';

export const alertSchema = z
  .object({
    id: z.number(),
    place: z.string(),
    imageURL: z.string(),
    state: z.string().optional(),
    latitude: z.string().transform((arg) => arg.toString()),
    longitude: z.string().transform((arg) => arg.toString()),
    truckId: z.number().optional(),
  })
  .strict();

export const alertSchemaAdd = alertSchema.omit({
  id: true,
  imageURL: true,
});
export const alertSchemaUpdate = alertSchemaAdd.partial();

export const alertQuerySchema = z.object({}).strict();
export const alertNotPickedQuerySchema = z
  .object({
    latitude: z.string(),
    longitude: z.string(),
  })
  .strict();
export const findUserSchema = alertQuerySchema.omit({ id: true });
