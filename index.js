var express = require('express');

var bodyParser = require('body-parser');
var db  = require('./db/db');

var app = express();
app.use(bodyParser.json());
loadModules(app);
app.listen(3000);


///////////////////////////

function loadModules(app) {
    require('require-all')({
        dirname: __dirname + '/modules',
        filter: /(.+routes)\.js$/,
        recursive: true,
        resolve: function (routes) {
            routes(app);
        }
    });
}