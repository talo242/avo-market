import * as avocado from './modules/avocado/avocado.resolvers';
import * as scalars from './modules/base/customScalars';

export default {
  ...scalars,
  Query: {
    avocados: avocado.findAllAvocados,
    avocado: avocado.getAvocadoById,
  },
  Mutation: {
    createAvocado: avocado.createAvocado,
  },
};
