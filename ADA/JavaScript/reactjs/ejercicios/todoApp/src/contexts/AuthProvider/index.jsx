import React, { useState, createContext } from 'react'

//call for a 'context' method
const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    //inside 'value' is the information i'm passing
    return (
        <AuthProvider.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthProvider.Provider>
    )
}

export { AuthProvider, AuthContext }