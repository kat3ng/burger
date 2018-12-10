// REQUIRE MYSQL
const mysql = require('mysql');
// REQUIRE DOTENV
require("dotenv").config();

// REQUIRE PWDS
// const keys = require("./keys.js");
// let serverKeys = (keys.server);

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: "root",
    password: "root",
    database: 'burger_db',
});


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;