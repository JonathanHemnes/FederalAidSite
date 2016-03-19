const Joi = require('joi');
const ObjectAssign = require('object-assign');
const BaseModel = require('hapi-mongo-models').BaseModel;

const Program = BaseModel.extend({
    // instance prototype
    constructor: function (attrs) {

        ObjectAssign(this, attrs);
    }
});

Program._collection = 'FederalAidPrograms';

Program.schema = Joi.object().keys({
    name: Joi.string().required(),
    url: Joi.string().uri().required(),
    urlToForms: Joi.string().uri().required(),
    description: Joi.string().required(),
    requiredChildAge: Joi.number().integer(),
    isRequiredToBePregnant: Joi.boolean(),
    maxFPL: Joi.number().required()

});

Program.staticFunction = function () {

    // static class function
};

module.exports = Program;