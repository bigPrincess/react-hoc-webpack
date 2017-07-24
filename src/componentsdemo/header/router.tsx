import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { HeaderapiComponentWithHoc as HeaderapiComponent } from './components/headerapi';
import { GradHeaderComponentWithHoc as GradHeaderComponent } from './components/gradheader';
import { CommomHeaderComponentWithHoc as CommomHeaderComponent } from './components/commomheader';



export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/components/header/gradHeader" component={GradHeaderComponent} />
                    <Route path="/components/header/commomHeader" component={CommomHeaderComponent} />
                    <Route path="/components/header" component={HeaderapiComponent} />                    
               </Switch>
        );
    }
}