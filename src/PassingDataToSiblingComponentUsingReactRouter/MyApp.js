import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';






const MyApp = () => {
    return (
        <div>
            <BrowserRouter>

                <ul>
                    <li><Link exact to='/'>Home</Link></li>
                    <li><Link exact to='/contact'>Contact</Link></li>
                    {/* <li><a exact href='/'>Home</a></li>
                    <li><a href='/contact'>Contact</a></li> */}
                </ul>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MyApp
