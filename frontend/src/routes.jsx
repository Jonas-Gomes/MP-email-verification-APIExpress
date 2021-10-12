import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import CadUser from './pages/Cadastros/User';
import User from './pages/Users';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/usuarios" component={User} />
                <Route path="/cadusuarios" component={CadUser} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;