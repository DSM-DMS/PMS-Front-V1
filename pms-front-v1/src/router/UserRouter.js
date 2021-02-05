import React from 'react';
import { Switch, Route } from "react-router-dom";

import { MainPage } from '../components/index';

function UserRouter() {
    return(
        <Switch>
            <Route path="/" component={MainPage} exact/>
        </Switch>
    )
}

export default UserRouter;
