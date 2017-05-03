import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <main>
        <article>
            <h2>About the Environment Viewer</h2>

            <p><a href="https://github.com/caltemose/environment-viewer">This Github repo</a> contains a web application that visualizes data collected by an Internet of Things (IoT) device that reports environmental data: temperature, humidity, ambient light and sound. The IoT device sits on my porch in Atlanta, Georgia (30307) and reports this data once every 15 minutes.</p>

            <h3>The Technology</h3>

            <p>There is a <a href="https://github.com/caltemose/environment-reporter">separate Github repository</a> for the code running on the IoT device. {/*<a href="">Read about it here</a> to find out more details about how that works.*/}</p>

            <p>One important thing to note about the Tessel device is that it does not have significant protection to keep the temperature reading from running a little higher than it should when it's sunny out. The device gets sun from the west and while it's somewhat protected, I suspect that sometimes the temperature it reports is a little higher than the real high temperature in the same location if I had a professional weather reporting device. The temperature sensor is not in direct sunlight so I don't think this affect is drastic.</p>

            <h3>Mobile/Small Screen</h3>

            <p>While the graphs work on small devices and do respond to the screen size (the graphs shrink to fit all data in the screen's visible width), they don't respond well. This is something I'll be improving in the near future so the visualizations make more sense when viewed on small screens.</p>

            <h3>Recent Data</h3>

            <p>
                The <Link to="/recent">Recent Data</Link> page shows all of the most recent data plotted separately - a graph for each type of data collected. This data is not filtered.
            </p>

            <h3>Extremes</h3>

            <p>
                The <Link to="/extremes">Extremes</Link> page shows the highs and the lows for recent data - both in text form and as a plotted graph. Obviously this data is filtered since I'm displaying only the high and low temp for any given day. One of the interesting things here is seeing how the time for the highest and lowest temperatures changes on a daily basis. I hope to expand the graphs here to show this more clearly, especially once more data is collected and can be analysed on a seasonal and yearly basis.
            </p>
        </article>
    </main>
)

export default Home
