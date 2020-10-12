import { gql } from 'apollo-server-micro'

export const merchantTypeDef = gql`
    extend type Query {
        merchant: Merchant
    }

    type Merchant {
        id: ID!
        avatar: String!
        name: String!
        email: String!
        phone: String!
        location: String!
        repairAssigned: [ID!]
        category: Category!
        createdAt: Date!
        updatedAt: Date!
    }

    enum Category {
        Technician
        Taylorist
    }
`