import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';

const MyApp = () => {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link exact to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </Router>
            
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>

            </Router>


        </div>
    )
}

export default MyApp