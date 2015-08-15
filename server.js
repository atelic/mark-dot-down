var express = require('express');
var app = express();

// sharejs deps
var sharejs = require('share');
require('redis');


// set the view engine to ejs
app.set('view engine', 'ejs');

// public folder to store assets
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', function(req, res) {
    res.render('pad');
});

var shareOptions = {
    db: { type: 'redis'}
};

sharejs.server.attach(app, shareOptions);

// listen on localhost:8000
var port = process.env.PORT || 8000;
app.listen(port);
