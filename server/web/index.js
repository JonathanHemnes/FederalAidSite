exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  next();
};


exports.register.attributes = {
  name: 'web'
};
