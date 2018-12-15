console.log(`ORM, ready for duty...`);

const connection = require('./connection.js');
// const server = require("./keys")

let orm = {
    select: (table) => {
        let query = `SELECT * FROM ??`

        connection.query(query, [table], (err, results) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - displaying all burgers, captain...`)
            // console.log(results);
        });
    },

    create: (table, column, value) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - adding a burger to the database, captain...`)
            console.log(result);
        });
    },

    update: (table, column, columnValue, id, value) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, columnValue, id, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - updating burgers_db for you, captain...`)
            console.log(result);
        });
    },

    delete: (table, column, value) => {
        let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`

        connection.query(deleteQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - activating delete sequence, captain...`)
            console.log(result);
        });
    }
}



// select("burgers");
// orm.create("burgers", "burger_name", "Whammy", "devoured", "TRUE");
// orm.update("burgers", "burger_name", "McRibs", "id", "12");
// orm.delete("burgers", "id", "11");

module.exports = orm;