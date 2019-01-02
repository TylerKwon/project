var PORT = process.env.PORT || 3000;

var express = require('express');

var app = express();

app.get('/users', function(req, res) {
    res.sendFile(__dirname + '/users.html');
});

app.get('/posts', function(req, res) {
    res.sendFile(__dirname + '/posts.html');
});

app.get('/profiles', function(req, res) {
    res.sendFile(__dirname + '/profiles.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log("server has started");

});

