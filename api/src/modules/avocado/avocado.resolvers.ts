import { CreateAvocadoInput, CreateAvocadoInputSchema } from './avocado.models';
import { prisma } from '../../../prisma/db';

export const getAll = () => prisma.avocado.findMany();

export const getOne = (_: unknown, args: { id: string }) =>
  prisma.avocado.findUnique({ where: { id: args.id } });

export const create = async (
  _: unknown,
  args: { data: CreateAvocadoInput }
) => {
  const data = CreateAvocadoInputSchema.parse(args.data);
  return prisma.avocado.create({
    data,
  });
};
