exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/getFilteredPrograms',
        handler: function (request, reply) {
            var FederalAidPrograms = request.server.plugins['hapi-mongo-models'].Programs;
            FederalAidPrograms.find({}, (err,result)=>{
                console.log(result);
                return reply({result});
            });
        }
    });

    next();
};


exports.register.attributes = {
    name: 'api'
};
