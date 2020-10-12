import { gql } from 'apollo-server-micro'

export const userTypeDef = gql`
    extend type Query {
        user: User
        viewer: User
    }

    type User {
        id: ID!
        phone: String!
        name: String!
        avatar: String
        email: String!
        location: String
        repair: [ID!]
        createdAt: Date!
        updatedAt: Date!
    }

    extend type Mutation {
        signup(input: signupInput): User
        login(input: loginInput): Token
        logout(input: loginInput): Boolean
    }

    type Token {
        token: String!
    }

    input loginInput {
        email: String!
        password: String!
    }

    input signupInput {
        name: String!
        email: String!
        password: String!
        phone: String!
    }

    extend type Subscription {
        userCreated: User
    }
`