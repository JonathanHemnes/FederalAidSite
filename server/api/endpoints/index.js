exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/getFilteredPrograms',
        handler: function (request, reply) {
            console.log(request.payload)
            return reply({ message: 'Welcome to the plot device.' });
        }
    });


    next();
};


exports.register.attributes = {
    name: 'api'
};
