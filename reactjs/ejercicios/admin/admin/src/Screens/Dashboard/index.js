import React, { useState } from 'react'
import Layout from '../../Layout'
import Main from '../../Main'
import { LikeButton } from '../../components'
import { Counter } from '../../components'

const Dashboard = () => {
    const [cambioColor, setCambioColor] = useState('text-primary')
    const cambio = () => {
        setCambioColor(!cambioColor && 'text-danger')
    }
    return (
        <Layout>
            <Main>
                <h1 className={cambioColor} onClick={cambio}>Dashboard</h1>
                <LikeButton />
                <Counter />
            </Main>
        </Layout>
    )
}
export { Dashboard }