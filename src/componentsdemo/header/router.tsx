import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { HeaderapiComponentWithHoc as HeaderapiComponent } from './components/headerapi';
import { GradHeaderComponent} from './components/gradheader';
import { CommomHeaderComponent} from './components/commomheader';



export class RouterComponent extends React.Component<any, any>{
    render() {
        return (
                <Switch>
                    <Route path="/header/gradHeader" component={GradHeaderComponent} />
                    <Route path="/header/commomHeader" component={CommomHeaderComponent} />
                    <Route path="/header" component={HeaderapiComponent} />                    
               </Switch>
        );
    }
}