import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sitebar from './global/Sitebar'
import NoMatch from './global/NoMatch'
import Home from './Home'
import Recent from './reports/Recent'
import Extremes from './reports/Extremes'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Sitebar classes="sitebar sitebar-top" />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recent" component={Recent} />
                        <Route path="/extremes" component={Extremes} />
                        <Route component={NoMatch} />
                    </Switch>

                    <Sitebar classes="sitebar sitebar-bottom" />
                </div>
            </Router>
        );
    }
}

export default App;
