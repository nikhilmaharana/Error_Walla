import { useState } from "react"

export default function Login() {
  const [msg, setMsg] = useState("")

  return (
    <div>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={() => setMsg("Login successful")}>Login</button>
      {msg && <p>{msg}</p>}
    </div>
  )
}
