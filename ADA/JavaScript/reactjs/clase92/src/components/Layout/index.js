
import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

//Higher Order Component - meter componente dentro de otro y llamarlos todos juntos de una.
export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}