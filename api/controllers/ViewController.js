'use strict';

const Controller = require('trails/controller');

module.exports = class ViewController extends Controller {

    splash(request, reply) {
        reply.view('environments/Splash');
    }

    stopList(request, reply) {
        reply.view('environments/Stops');
    }

    stopDetails(request, reply) {
        let stopId = request.params.stopId;

        this.app.services.ScheduleService.stopId(stopId, function(err, payload) {
            if (err) {
                reply(err);
            }
            reply(payload);
        });
    }

};
