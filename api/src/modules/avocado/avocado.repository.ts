import { Avocado } from '@prisma/client';
import { prisma } from '../../../prisma';
import { CreateAvocadoInput } from './avocado.models';

export const findAll = async (): Promise<Avocado[]> => {
  return prisma.avocado.findMany();
};

export const getById = async (id: string): Promise<Avocado | null> => {
  return prisma.avocado.findUnique({ where: { id } });
};

export const create = async (data: CreateAvocadoInput): Promise<Avocado> => {
  return prisma.avocado.create({ data });
};
