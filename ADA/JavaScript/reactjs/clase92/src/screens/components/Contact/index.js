import React from 'react'
import './index.css'

export const Contact = () => {
    return (
        <form>
            <label>Name:
                <input type="text" name="name" id="name" placeholder="Name"></input>
            </label>
            <label>Lastname:
                <input type="text" name="lastName" id="lastName" placeholder="Lastname"></input>
            </label>
            <label>Email:
                <input type="email" name="email" id="email" placeholder="Email"></input>
            </label>
            <label>Subject:
                <input type="text" name="subject" id="subject" placeholder="Subject"></input>
            </label>
            <textarea placeholder="Message"></textarea>
            <button id="submit">Enviar</button>
        </form>
    )
}