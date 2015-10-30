require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'

import StopList from './Stop/StopList';
import Stop from './Stop/Stop';

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={StopList}>
          <Route path="stop" component={StopList}>
            <Route path=":stopid" component={Stop} />
          </Route>
        </Route>
      </Router>
    )
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
