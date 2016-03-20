var express = require('express');
var app = express();
// var port = process.agrv[0];

app.get('/home', function(req, res) {
    res.send('Hello World!');
})

app.listen(process.argv[2]);
