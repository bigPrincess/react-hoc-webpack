import React from 'react';
import ReactDom from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  Route
} from 'react-router';
import { HashRouter } from 'react-router-dom';
import {Layout1} from '../../components/layout';

const history = createBrowserHistory();

class Main extends React.Component {
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <Route path="/" component={Layout1}/>
          <Route path="/sample" component={require('react-proxy-loader!./sample/Sample')}/>
        </div>
      </HashRouter>
    );
  }
}

ReactDom.render(
  <Main/>,
  document.getElementById('application')
);
