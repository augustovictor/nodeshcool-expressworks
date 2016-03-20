// Jade engine
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

// Specify the path to the template files in the folder templates
app.set('views', './');

// Tell Express what template engine to use
app.set('view engine', 'jade');


app.get('/home', function(req, res) {
    // Accepts a template name and data (called locals)
    res.render('ex6View', { date: new Date().toDateString() });
});

app.listen(port, function() {
    console.log('Server running at: http://localhost:' + port);
});
