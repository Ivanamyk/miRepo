import React, { useState, useContext, createContext } from 'react'
import { ThemeProvider } from 'react-bootstrap'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [color, setColor] = useState('red')
    const [height, setHeight] = useState('300')

    return (
        <ThemeProvider.Provider value={{ color, setColor, height, setHeight }}>
            {children}
        </ThemeProvider.Provider>
    )
}

export { ThemeContext, ThemeProvider }