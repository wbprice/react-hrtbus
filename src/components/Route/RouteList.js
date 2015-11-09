import React from 'react'
import Radium from 'radium'
import Route from './Route';

class RouteList extends React.Component {
  render() {
    return (
      <section>
        <pre>RouteList</pre>
        <Route />
        <Route />
        <Route />
      </section>
    )
  }
}

export default RouteList
