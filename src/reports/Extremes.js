import React, { Component } from 'react';
import firebase from 'firebase'
import moment from 'moment'
// import Plot from './Plot'

class Extremes extends Component {
    state = {
        report: {}
    }

    componentWillMount () {
        this.firebaseRef = firebase.database().ref('/environment/data')
        this.firebaseRef.once('value').then(function (snapshot) {
            const data = snapshot.val()
            let currentDay
            let report = {}
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            Object.keys(data)
                .sort()
                .forEach(function (key) {
                    var day = moment(data[key].date)
                    // day change
                    if (!day.isSame(currentDay, 'day')) {
                        currentDay = day.clone()
                        report[currentDay.format()] = {
                            date: currentDay.format('YYYY/MM/DD'),
                            day: daysOfWeek[currentDay.format('e')],
                            hi: {},
                            low: {}
                        }
                    }
                    var temp = Number(data[key].tempF)
                    // set daily high temp if current temp is higher than
                    // stored daily hi
                    if (!report[currentDay.format()].hi.temp || report[currentDay.format()].hi.temp < temp) {
                        report[currentDay.format()].hi = {
                            temp: temp,
                            time: day.format('HH:mm')
                        }
                    }
                    // set daily low temp if current temp is lower than
                    // stored daily low
                    if (!report[currentDay.format()].low.temp || report[currentDay.format()].low.temp > temp) {
                        report[currentDay.format()].low = {
                            temp: temp,
                            time: day.format('HH:mm')
                        }
                    }
                })

            this.setState({
                report: report
            })
        }.bind(this))
    }

    componentWillUnmount () {
        this.firebaseRef.off()
    }

    render () {
        var report = this.state.report
        var days = Object.keys(report)
        return (
            <main>
                <h2>Extremes</h2>
                <ul>
                    {days && days.map(key => (
                        <li key={key}>
                            Date: {report[key].date} ({report[key].day})<br />
                            High: {report[key].hi.temp} at {report[key].hi.time} <br/>
                            Low: {report[key].low.temp} at {report[key].low.time}
                        </li>
                    ))}
                </ul>
                <Plots traces={this.state.plots} title="Daily Highs/Lows" />
            </main>
        )
    }
}

export default Extremes
