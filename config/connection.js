// REQUIRE MYSQL
const mysql = require('mysql');

const dotenv = require("dotenv").config();
// CONNECT TO THE DATABASE
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: process.env.SERVER_ID,
        password: process.env.SERVER_SECRET,
        // socket: "Applications/MAMP/tmp/mysql.sock",
        database: "burger_db"
    })
}

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connection.js connected as id " + connection.threadId);
});

module.exports = connection;