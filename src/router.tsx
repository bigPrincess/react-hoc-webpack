import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { ArticleComponent } from './modules/article';
import { HeaderapiComponent } from './componentsdemo/headerapi';
import { AssemblyapiComponent } from './componentsdemo/assemblyapi';
import { HttpDemoComponent } from './componentsdemo/http';

export class RouterComponent extends React.Component<any, any>{
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/headerapi" component={HeaderapiComponent} />
                    <Route path="/componentsapi" component={AssemblyapiComponent} />
                    <Route path="/http" component={HttpDemoComponent} />
                    <Route path="/wz.html" component={ArticleComponent} />
                    <Redirect from="/" to="/wz.html" />
                </Switch>
            </Router>
        );
    }
}