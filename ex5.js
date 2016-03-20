// STYLISH CSS

// MODULES
var express = require('express');
var stylus = require('stylus');

// DEFINITIONS
var app = express();
var port = 3000;

// MIDDLEWARES
app.use(stylus.middleware(__dirname + '/*.styl'));

// Layout engine
app.set('view engine', 'jade');

// Static files
app.set('views', __dirname);
app.use(express.static(__dirname));

// ROUTES
app.get('/', function(req, res) {
    res.render('ex5View');
});

// SERVER
app.listen(port, function() {
    console.log('Server running at http://localhost:' + port);
});
