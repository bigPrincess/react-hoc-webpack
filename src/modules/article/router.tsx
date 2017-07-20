import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { ArticleComponentWithHoc as ArticleComponent } from './components/article';


export class RouterComponent extends React.Component<any, any>{

    render() {

        return (
                <Switch>
                    <Route path="/wz/155.html" component={ArticleComponent} /> : null}
               </Switch>
        );
    }
}