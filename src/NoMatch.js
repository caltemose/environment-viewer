import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const NoMatch = () => (
    <main>
        <h1>Route Not Found</h1>
        <p>
            Thank you.
            <Link to="/">Come again!</Link>
        </p>
        <Redirect to="/" />
    </main>
)

export default NoMatch
