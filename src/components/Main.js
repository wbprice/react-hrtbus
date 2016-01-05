require('normalize.css');
require('flexboxgrid');
require('purecss/build/pure-min.css');
require('../styles/App.css');

import React from 'react'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { Route, Redirect, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const ReduxRouter = require('redux-router').ReduxRouter
const routerStateReducer = require('redux-router').routerStateReducer
const reduxReactRouter = require('redux-router').reduxReactRouter

// Components
import Header from './Header/Header'
import StopList from './Stop/StopList'
import Stop from './Stop/Stop'
import RouteList from './Route/RouteList'
import SingleRoute from './Route/Route'
import StyleGuide from './StyleGuide/StyleGuide'
import Instructions from './Instructions/Instructions'
import FaveList from './FavoriteStops/FaveList'

// Reducers
import stops from './../redux/modules/stops/stop-reducer.js'
import faveStops from './../redux/modules/favorites/fave-stop-reducer.js'

const reducer = combineReducers({
  router: routerStateReducer,
  stops,
  faveStops
})
const logger = createLogger()
const store = compose(
  applyMiddleware(thunk, logger),
  reduxReactRouter({ createHistory })
)(createStore)(reducer)

class App extends React.Component {
  render() {

    let body = {
      marginTop: '3.25em',
      paddingTop: '1em'
    }

    return (
      <article style={body}>
        <Header />
        <section className="container">
          {this.props.children}
        </section>
      </article>
    )
  }
}

class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <Route path="stop" component={StopList}>
              <Route path=":stopid" component={Stop}/>
            </Route>
            <Route path="route" component={RouteList}>
              <Route path=":routeid" component={SingleRoute}/>
            </Route>
            <Route path="styleguide" component={StyleGuide} />
            <Route path="favorites" component={FaveList}/>
            <Route path="*" component={Instructions}/>
          </Route>
        </ReduxRouter>
      </Provider>
    )
  }
}

export default AppRouter