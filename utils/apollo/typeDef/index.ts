import { userTypeDef }  from './user'
import { repairTypeDef }  from './repair'
import { merchantTypeDef }  from './merchant'
import { gql }  from 'apollo-server-micro'
const { DateTypeDefinition } = require('graphql-scalars')

export const typeDefs = [gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }

    type Subscription {
        _: String
    }
    `,
    userTypeDef,
    repairTypeDef,
    merchantTypeDef,
    DateTypeDefinition
]
