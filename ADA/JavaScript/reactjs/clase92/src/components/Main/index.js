import React from 'react'
import './index.css'
import { News } from '../../screens/components/News'
import { Services } from '../../screens/components/Services'
import { Aside } from '../Layout/components/Aside'
import { Contact } from '../../screens/components/Contact'

export const Main = () => {
    return (
        <section className="contenedor">
            <article>
                <section>
                    <News />
                    <Services />
                </section>
                <Contact />
            </article>
            <Aside />
        </section>
    )
}