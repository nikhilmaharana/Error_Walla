import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)

  const login = (tokenValue) => {
    setToken(tokenValue)
    sessionStorage.setItem("token", tokenValue) // secure-ish for demo
  }

  const logout = () => {
    setToken(null)
    sessionStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
