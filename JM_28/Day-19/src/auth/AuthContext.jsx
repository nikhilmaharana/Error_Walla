import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  )

  const login = (email, password) => {
    if (email === "test@example.com" && password === "123456") {
      const fakeToken = "mock-auth-token"
      localStorage.setItem("token", fakeToken)
      setToken(fakeToken)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
