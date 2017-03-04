/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the Splash view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.splash'
  },

  /**
   * Render the StopList view
   */
  {
    method: 'GET',
    path: '/stops',
    handler: 'ViewController.stopList'
  },

  /**
   * Render the StopDetails view
   */
  {
    method: 'GET',
    path: '/stops/{stopId}',
    handler: 'ViewController.stopDetails'
  },
  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  {
    method: [ 'GET' ],
    path: '/api/v1/stopId',
    handler: 'ScheduleController.stopId'
  }

]
