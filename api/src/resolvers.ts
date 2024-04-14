import * as avocado from './modules/avocado/avocado.resolvers'
import * as scalars from './modules/base/customScalars'

export default {
  ...scalars,
  Query: {
    avocados: avocado.getAll,
    avocado: avocado.getOne,
  },
  Mutation: {
    createAvocado: avocado.create,
  },
}
