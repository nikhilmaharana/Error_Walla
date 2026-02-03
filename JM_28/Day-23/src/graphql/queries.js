import { gql } from "@apollo/client"

export const GET_USERS = gql`
  query {
    users(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        name
        email
      }
    }
  }
`
