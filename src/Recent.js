import React, { Component } from 'react';
import firebase from 'firebase'
import moment from 'moment'
import Plot from './Plot'

class Recent extends Component {
    state = {
        items: [],
        xData: [],
        yTemp: [],
        yHumid: [],
        yLight: [],
        ySound: []
    }

    componentWillMount () {
        this.firebaseRef = firebase.database().ref('/environment/data')
        // this.firebaseRef.limitToLast(10).on('child_added', function (snapshot) {
        //     var data = snapshot.val()
        //     this.setState({
        //         xData: [ ...this.state.xData, data.date ],
        //         yData: [ ...this.state.yData, data.tempF ]
        //     //     items: [ ...this.state.items, snapshot.val() ]
        //     })
        // }.bind(this))
        this.firebaseRef.once('value').then(function (snapshot) {
            const data = snapshot.val()
            const xData = []
            const yTemp = []
            const yHumid = []
            const yLight = []
            const ySound = []

            Object.keys(data)
                .sort()
                .forEach(function (key) {
                    xData.push(moment(data[key].date).format())
                    yTemp.push(data[key].tempF)
                    yHumid.push(data[key].humid)
                    yLight.push(data[key].light)
                    ySound.push(data[key].sound)
                })
            this.setState({
                xData: [ ...this.state.xData, ...xData ],
                yTemp: [ ...this.state.yTemp, ...yTemp ],
                yHumid: [ ...this.state.yHumid, ...yHumid ],
                yLight: [ ...this.state.yLight, ...yLight ],
                ySound: [ ...this.state.ySound, ...ySound ]
            })
        }.bind(this))
    }

    componentWillUnmount () {
        this.firebaseRef.off()
    }

    render() {
        return (
            <main>
                <h2>Recent Data</h2>
                <Plot xData={this.state.xData} yData={this.state.yTemp} title="Temperature (&deg;F)" color="rgb(255,20,50)" />
                <Plot xData={this.state.xData} yData={this.state.yHumid} title="Humidity (%RH)" color="rgb(20,100,202)" />
                <Plot xData={this.state.xData} yData={this.state.yLight} title="Light" color="rgb(20,200,80)" />
                <Plot xData={this.state.xData} yData={this.state.ySound} title="Sound" color="rgb(55,60,40)" />
            </main>
        )
    }
}

export default Recent
