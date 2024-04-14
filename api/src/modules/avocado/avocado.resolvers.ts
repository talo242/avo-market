import { Avocado, CreateAvocadoInput, CreateAvocadoInputSchema } from './avocado.models'
import { v4 as uuid } from 'uuid'

const avocados: Array<Avocado> = []

export const getAll = () => avocados

export const getOne = (_: unknown, args: { id: string }) => avocados.find(({ id }) => id === args.id)

export const create = (_: unknown, args: { data: CreateAvocadoInput }) => {
  const validPayload = CreateAvocadoInputSchema.parse(args.data)
  const newAvocado = { id: uuid(), createdAt: new Date(), ...validPayload }

  avocados.push(newAvocado)
  return newAvocado
}
