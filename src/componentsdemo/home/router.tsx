import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { HomeComponentHoc as HomeComponent } from './components/home';
import { HttpDemoComponent } from '../http';
import { RouterComponent as HeaderRouterComponents } from '../header';



export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
                <Switch>
                        <Route path="/components/http" component={HttpDemoComponent} />
                        <Route path="/components/header" component={HeaderRouterComponents} />
                        <Route path="/components" component={HomeComponent} />
               </Switch>
        );
    }
}