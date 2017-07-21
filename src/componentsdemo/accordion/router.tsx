import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { AccordionApiComponentWithHoc as AccordionApiComponent } from './components/accordion';


export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
                <Switch>
                    <Route path="/headerapi" component={AccordionApiComponent} />
               </Switch>
        );
    }
}