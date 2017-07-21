import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { AssemblyapiComponentWithHoc as AssemblyapiComponent } from './components/assemblyapi';


export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
                <Switch>
                    <Route path="/assemblyapi/*" component={AssemblyapiComponent} />
               </Switch>
        );
    }
}