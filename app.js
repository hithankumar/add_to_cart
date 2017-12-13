var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/WebApp'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionString(), { useMongoClient: true });
setupController(app);
apiController(app);

app.listen(port);