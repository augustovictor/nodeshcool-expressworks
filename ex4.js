// GOOD OLD FORM

// Modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Definitions
var app = express();
var port = process.argv[2];

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// View engine
app.set('view engine', 'jade');

// Path to static files
app.set('views', './');

// Routes
app.get('/form', function(req, res) {
    res.render('ex4Form');
});

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(port, function() {
    console.log('Server running at http://localhost:' + port);
});
