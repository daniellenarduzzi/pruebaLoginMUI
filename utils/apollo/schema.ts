import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './typeDef'
import { resolvers } from './resolvers'


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
