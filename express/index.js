var express = require("express");
var app = express();
var users = require("./routes/usersRoute"); 
var mysql = require("mysql");

app.use('/users', users);

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "firstDB"
// });

// con.connect(err => {

//     if(err) throw err;
//     console.log("Connected");
//     con.query("SELECT * FROM Users", (err, result) => {
//         if (err) throw err; 
//         console.log(result);
//     });
// });

// con.end();

app.listen(5000);