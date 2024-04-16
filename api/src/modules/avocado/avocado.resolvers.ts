import { CreateAvocadoInput, CreateAvocadoInputSchema } from './avocado.models';
import * as avocadoRepository from './avocado.repository';

export const findAllAvocados = () => avocadoRepository.findAll();

export const getAvocadoById = (_: unknown, args: { id: string }) =>
  avocadoRepository.getById(args.id);

export const createAvocado = async (
  _: unknown,
  args: { data: CreateAvocadoInput }
) => {
  const data = CreateAvocadoInputSchema.parse(args.data);
  return avocadoRepository.create(data);
};
