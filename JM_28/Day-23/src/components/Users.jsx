import { gql, useQuery } from "@apollo/client"
import { GET_USERS } from "../graphql/queries"

function Users() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading data</p>

  return (
    <div>
      <h3>Users (GraphQL)</h3>
      <ul>
        {data.users.data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
