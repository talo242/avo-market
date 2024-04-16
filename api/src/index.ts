import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import { readFileSync } from 'fs';

const typeDefs = readFileSync('./src/schema.graphql', 'utf8');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
