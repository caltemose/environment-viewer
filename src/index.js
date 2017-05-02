/*global firebase */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import App from './App';
import './index.css';

var config = {
    apiKey: 'AIzaSyAGOPCns-YWmUL7fVgpfgZIEjVEuPc0eAc',
    databaseURL: 'https://sizzling-torch-6298.firebaseio.com',
    authDomain: 'sizzling-torch-6298.firebaseapp.com',
    storageBucket: 'sizzling-torch-6298.appspot.com'
}

firebase.initializeApp(config)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// projectId: "sizzling-torch-6298",
// messagingSenderId: "896200360003"
