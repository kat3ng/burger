const connection = require('./connection.js');
// const server = require("./keys")

let orm = {
    select: (table, cb) => {
        let query = `SELECT * FROM ??`

        connection.query(query, [table], (err, results) => {
            if (err) {
                throw err;
            }
            cb(results);
            console.log(`Displaying all burgers, captain...`)
        });
    },

    create: (table, column, value, cb) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value], (err, results) => {
            if (err) {
                throw err;
            }
            cb(results);
        });
        console.log(`Adding a burger to the database, captain...`)
    },

    update: (table, column, columnValue, id, value, cb) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, columnValue, id, value], (err, results) => {
            if (err) {
                throw err;
            }
            cb(results);
        });
        console.log(`Updating burgers_db for you, captain...`)
    },

    delete: (table, column, value, cb) => {
        let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`

        connection.query(deleteQuery, [table, column, id, value], (err, results) => {
            if (err) {
                throw err;
            }
            cb(results);
        });
        console.log(`Activating delete sequence, captain...`)
    }
}



// select("burgers");
// orm.create("burgers", "burger_name", "Whammy", "devoured", "TRUE");
// orm.update("burgers", "burger_name", "McRibs", "id", "11");

module.exports = orm;