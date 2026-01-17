import useFetch from "./hooks/useFetch"
import useAuth from "./hooks/useAuth"

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  )

  const { isLoggedIn, login, logout } = useAuth()

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Error: {error}</h3>

  return (
    <>
      <h2>Custom Hooks Demo</h2>

      <h3>Auth Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h3>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      <h3>User List</h3>
      {data.slice(0, 5).map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  )
}

export default App
