import { userResolver } from './user'
const { DateResolver } = require('graphql-scalars')

export const resolvers = [
    {Date: DateResolver},
    userResolver
]
