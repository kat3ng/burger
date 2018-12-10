// REQUIRE MYSQL
const mysql = require('mysql');
// REQUIRE DOTENV
require("dotenv").config();

// REQUIRE PWDS
const keys = require("./keys.js");
let serverKeys = (keys.server);

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: process.env.SECRET_SERVER,
    password: process.env.SERVER_ID,
    database: 'burgers_db',
});

app.get('/', (req, res) => {
    res.send(process.env.SECRET_SERVER);
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;