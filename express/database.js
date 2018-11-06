var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "firstDB"
});

con.connect(err => {

    if(err) throw err;
    console.log("Connected");
    con.query("SELECT * FROM Users", (err, result) => {
        if (err) throw err; 
        console.log(result);
    });
});
