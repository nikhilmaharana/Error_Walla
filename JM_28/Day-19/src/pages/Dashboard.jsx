import { useAuth } from "../auth/AuthContext"

function Dashboard() {
  const { logout } = useAuth()

  return (
    <div>
      <h2>Dashboard</h2>
      <p>You are logged in</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
