import React from 'react'
import { Link } from 'react-router-dom'

const Sitebar = ({ classes }) => (
    <div className={classes}>
        <h1>Environment Viewer</h1>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/recent">Recent Data</Link>
            <Link to="/extremes">Extremes</Link>
        </nav>
    </div>
)

export default Sitebar
