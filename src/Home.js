import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <main>
        <h2>Home</h2>
        <p>Various plots of environmental data collected by a Tessel and stored in Firebase:</p>
        <nav>
            <Link to="/recent">Recent Data</Link>
        </nav>
    </main>
)

export default Home
