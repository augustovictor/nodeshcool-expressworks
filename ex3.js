// Jade engine
var express = require('express');
var path = require('path');
var app = express();
var port = process.argv[2];

// Specify the path to the template files in the folder templates
app.set('views', path.join(__dirname, 'templates'));

// Tell Express what template engine to use
app.set('view engine', 'jade');


app.get('/home', function(req, res) {
    // Accepts a template name and data (called locals)
    res.render(process.argv[3], { date: new Date().toDateString() });
});

app.listen(port);
