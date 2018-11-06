var express = require("express");
var app = express();
var users = require("./routes/usersRoute"); 
var mysql = require("mysql");

app.use('/users', users);

app.listen(5000);