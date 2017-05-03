/* global Plotly */
import React, { Component } from 'react'

class Plot extends Component {
    componentDidMount () {
        // Currently this condition is never met
        if (this.props.xData.length && this.props.yData.length) {
            var title = this.props.title || ''
            Plotly.newPlot(this.node, [{
                x: this.props.xData,
                y: this.props.yData,
                type: 'scatter',
                line: {
                    color: this.props.color
                }
            }], {title})
        }
    }

    componentDidUpdate () {
        // Plotly.update() doesn't seem to work in this usage.
        // Need to determine a more efficient way of updating
        // the data rather than replotting the entire graph
        // every single time.
        if (this.props.xData.length && this.props.yData.length) {
            var title = this.props.title || ''
            Plotly.newPlot(this.node, [{
                x: this.props.xData,
                y: this.props.yData,
                type: 'scatter',
                line: {
                    color: this.props.color
                }
            }], {title})
        }
    }

    render () {
        return (
            <div ref={(node) => { this.node = node }}></div>
        )
    }
}

export default Plot
