/* global Plotly */
import React, { Component } from 'react'

class Plots extends Component {

    componentDidUpdate () {
        // Plotly.update() doesn't seem to work in this usage.
        // Need to determine a more efficient way of updating
        // the data rather than replotting the entire graph
        // every single time.
        if (this.props.traces.length) {
            var title = this.props.title || ''
            Plotly.newPlot(this.node, this.props.traces, {title})
        }
    }

    render () {
        return (
            <div ref={(node) => { this.node = node }}></div>
        )
    }
}

export default Plots
