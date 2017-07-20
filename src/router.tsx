import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { ArticleComponent } from './modules/article';

export class RouterComponent extends React.Component<any, any>{
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/wz.html" component={ArticleComponent} />
                    <Redirect from="/" to="/wz.html" />
                </Switch>
            </Router>
        );
    }
}