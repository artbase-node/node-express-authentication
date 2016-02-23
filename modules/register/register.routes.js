var apiConfig = require('../../config/api');
var registerController = require('./register.controller');

module.exports = function (app) {
    app.post(apiConfig.register, registerController.register);
};