'use strict';
exports.register =  (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler:{
            directory: {
                path: '.',
                listing: true
            }
        }
    });
    next();
};

exports.register.attributes = {
    name: 'web'
};
