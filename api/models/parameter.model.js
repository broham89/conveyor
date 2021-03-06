'use strict';

const Joi = require('joi');

class ParameterModel {
    static get schema() {

        return {
            key: Joi.string(),
            value: Joi.any()
        };
    };
}

module.exports = ParameterModel;
