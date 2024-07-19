import React, {createContext, useContext, useState} from 'react'

// creating context for authentication
const AuthContext = createContext()
//allows components to acces the authentication without passing props down manually

// custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext)
//makes acces easier

// creating provider for AuthContext
export const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    
    const login = () => setLoggedIn(true)
    const logout = () => setLoggedIn(false)

    return (
        <AuthContext.Provider value={{loggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
    //<AuthContext.Provider value={{ loggedIn, login, logout }}>: The AuthProvider component wraps its children in an AuthContext.Provider. It provides the current loggedIn state and the login and logout functions to any component that consumes this context.
}