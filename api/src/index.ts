import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import { readFileSync } from 'fs';
import { prisma } from '../prisma/db';

const typeDefs = readFileSync('./src/schema.graphql', 'utf8');

const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
