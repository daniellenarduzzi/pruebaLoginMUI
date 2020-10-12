import { gql } from 'apollo-server-micro'

export const repairTypeDef = gql`
    extend type Query {
        repair: Repair
    }

    type Repair {
        id: ID!
        description: String!
        img: String!
        category: Category!
        assignedTo: Merchant
        state: State!
        price: Float
        assignedAt: Date
        createdAt: Date!
        updatedAt: Date!
    }

    enum State {
        notAssigned
        Valued
        Aproved
        ShippedToMerchant
        inProgress
        ShippedToUser
        Completed
    }
`