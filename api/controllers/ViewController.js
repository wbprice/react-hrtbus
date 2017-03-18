'use strict';

const Controller = require('trails/controller');

module.exports = class ViewController extends Controller {

    splash(request, reply) {
        reply.view('components/environments/Splash');
    }

};
