var express = require('express');

var app = express();
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