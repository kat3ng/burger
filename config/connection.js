// REQUIRE MYSQL
const mysql = require('mysql');

// CONNECT TO THE DATABASE
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: "root",
    password: "root",
    database: 'burger_db',
});


connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;