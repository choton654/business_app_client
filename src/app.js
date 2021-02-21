import React from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// pages for this product
import Example from "views/example";
import SignIn from "views/signin";
import HomeShop from "views/homeshop";
import LogIn from 'views/login';

const hist = createBrowserHistory();
const App = () => {
    return (
        <div>
            <Router history={hist}>
                <Switch>
                    <Route exact path="/" component={HomeShop} />
                    <Route exact path="/example" component={Example} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/login" component={LogIn} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
