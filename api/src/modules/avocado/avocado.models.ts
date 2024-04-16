import { z } from 'zod';

export const AvocadoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullish(),
  price: z.number(),
  image: z.string().url().nullish(),
  ownerId: z.string().uuid(),
});

export const CreateAvocadoInputSchema = AvocadoSchema.omit({
  id: true,
});

export type CreateAvocadoInput = z.infer<typeof CreateAvocadoInputSchema>;
