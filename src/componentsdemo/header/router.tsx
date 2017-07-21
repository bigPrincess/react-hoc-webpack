import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { HeaderapiComponentWithHoc as HeaderapiComponent } from './components/headerapi';


export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
                <Switch>
                    <Route path="/headerapi" component={HeaderapiComponent} />
               </Switch>
        );
    }
}