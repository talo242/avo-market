import type { PrismaClient } from '@prisma/client';
import { CreateAvocadoInput, CreateAvocadoInputSchema } from './avocado.models';

type Context = {
  prisma: PrismaClient;
};

export const getAll = (_: unknown, __: unknown, { prisma }: Context) =>
  prisma.avocado.findMany();

export const getOne = (_: unknown, args: { id: string }, { prisma }: Context) =>
  prisma.avocado.findUnique({ where: { id: args.id } });

export const create = async (
  _: unknown,
  args: { data: CreateAvocadoInput },
  { prisma }: Context
) => {
  const data = CreateAvocadoInputSchema.parse(args.data);
  return prisma.avocado.create({
    data,
  });
};
