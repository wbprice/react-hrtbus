require('normalize.css');
require('styles/App.css');

import React from 'react';
import StopList from './Stop';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <StopList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
