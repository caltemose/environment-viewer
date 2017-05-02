import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NoMatch from './NoMatch'
import Home from './Home'
import Recent from './Recent'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recent" component={Recent} />
                        <Route component={NoMatch} />
                    </Switch>

                    <Header />
                </div>
            </Router>
        );
    }
}

export default App;
