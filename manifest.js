'use strict';
const Confidence = require('confidence');
const Config = require('./config');
const Path = require('path');


const criteria = {
    env: process.env.NODE_ENV
};


const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/web'),
        labels: ['web'],
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'server/web/')
            }
        }
    }],
    plugins: {
        'vision': {},
        'inert': {},
        'hapi-mongo-models':{
            'mongodb':{
                'url': 'mongodb://' + process.env.MODULUS_DB_USER + ':' + process.env.MODULUS_DB_PASS + '@jello.modulusmongo.net:27017/byj5oJah'
            },
            'models':{
                'Programs': './server/api/schemas/federal-aid-programs.schema.js'
            }
        },
        'good' : {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        log: '*',
                        response: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        },
        './server/api/endpoints/index': [{ routes: { prefix: '/api' } }],
        './server/web/index': {}
    }
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};

//
