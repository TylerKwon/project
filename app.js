require('dotenv').config();

var PORT = process.env.PORT || 3000;

var express = require('express');
var mysql = require('mysql');
var dbconfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
};
var connection = mysql.createConnection(dbconfig);
connection.connect(function onConnect(err) {
    if (err) {
        console.log('error when connecting to db:', err);
        return;
    }
    console.log("connection successful");

});
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

app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log("server has started");

});

