import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Environment Viewer</h1>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/recent">Recent Data</Link>
        </nav>
    </header>
)

export default Header
