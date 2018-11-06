var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get("/", (req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "firstDB"
    });

    con.query(
        "SELECT id, first_name, last_name, phone, email, password FROM Users", 
        (err, results) =>{
        if(err) throw err;
        res.send(results);
    })

    con.end();
});

router.get("/:id", (req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "firstDB"
    });

    con.query(
        `SELECT id, first_name, last_name, phone, email, password FROM Users WHERE id = ${req.params.id}`,
        (err, results) =>{
            if(err) throw err;
            res.send(results);
    })

    con.end();
})

router.post("/", (req, res) => {
    console.log(req.params);
})

module.exports = router;