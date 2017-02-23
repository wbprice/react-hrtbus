'use strict';

const Controller = require('trails/controller');

/**
 * @module ScheduleController
 * @description A controller for handling Schedule related requests..
 */

module.exports = class ScheduleController extends Controller {
    /**
     * @name
     * stop
     * @description
     * Accepts stopIds and returns schedule data for those stops.
     */

    stopId(request, reply) {
        const stopId = request.query.stopId;
        this.log.info('stopId', stopId);
        this.app.services.ScheduleService.stopId(stopId, (err, payload) => {
            if (err) {
                throw err;
            }
            reply(payload);
        });
    }
};

