require('normalize.css');
require('styles/App.css');
require('styles/Flexbox.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'

import StopList from './Stop/StopList'
import RouteList from './Route/RouteList'
import Home from './Home/Home'
import Feedback from './Feedback/Feedback'
import Instructions from './Instructions/Instructions'
import StyleGuide from './StyleGuide/StyleGuide'

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/stop" component={StopList}>
          <Route path=":stopid" component={StopList} />
        </Route>
        <Route path="/route" component={RouteList}>
          <Route path=":routeid" component={RouteList} />
        </Route>
        <Route path="/feedback" component={Feedback} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/styleguide" component={StyleGuide} />
      </Router>
    )
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
