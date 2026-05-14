import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

function AuthProvider({ children }) {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  )

  const login = (data) => {

    setUser(data)

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    )
  }

  const logout = () => {

    setUser(null)

    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider