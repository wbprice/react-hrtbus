'use strict';

const Service = require('trails-service');
const Wreck = require('wreck');

/**
 * @module ScheduleService
 * @description A service that retrieves bus scheduling information.
 */
module.exports = class ScheduleService extends Service {

    stopId(stopId, callback) {
        Wreck.get(`http://api.hrtb.us/api/v2/stops?id=${stopId}`, {}, (err, response, payload) => {
            if (err) {
                callback(err);
            }
            callback(null, payload);
        });
    }

};
