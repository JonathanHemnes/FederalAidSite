const Joi = require('joi');
const ObjectAssign = require('object-assign');
const BaseModel = require('hapi-mongo-models').BaseModel;

const Person = BaseModel.extend({
    // instance prototype
    constructor: function (attrs) {

        ObjectAssign(this, attrs);
    }
});

Person.schema = Joi.object().keys({
    children: Joi.array().required(),
    numberOfFamilyMembers: Joi.number().integer().required(),
    annualIncome: Joi.number().required(),
    isPregnant: Joi.boolean().required()
});

Person.staticFunction = function () {

    // static class function
};

module.exports = Person;
