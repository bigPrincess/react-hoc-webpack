import * as React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import { ArticleComponent} from './modules/article/index';

export class RouterComponent extends React.Component<any, any>{
    
    render() {
        console.log("sadadadadadadadadead");
        console.log(ArticleComponent);
        debugger;
        return (
            <Router>
                    <Route path="/wz" component={ArticleComponent} />
            </Router>
        );
    }
}