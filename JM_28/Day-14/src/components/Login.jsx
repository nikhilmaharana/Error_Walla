import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = () => {
    if (email === "test@example.com" && password === "123456") {
      setMessage("Login successful")
    } else {
      setMessage("Invalid credentials")
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button data-testid="login-btn" onClick={handleLogin}>
        Login
      </button>

      <p data-testid="login-message">{message}</p>
    </div>
  )
}

export default Login
