import { useAuth } from "../auth/AuthContext"

function Dashboard() {
  const { token, logout } = useAuth()

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Token present: {token ? "YES" : "NO"}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
