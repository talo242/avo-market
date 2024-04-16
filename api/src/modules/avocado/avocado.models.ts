import { z } from 'zod';

export const AvocadoSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullish(),
  price: z.number(),
  image: z.string().url().nullish(),
});

export type Avocado = z.infer<typeof AvocadoSchema>;

export const CreateAvocadoInputSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  image: z.string().url().optional(),
});

export type CreateAvocadoInput = z.infer<typeof CreateAvocadoInputSchema>;
