const connection = require('./connection.js');
// const server = require("./keys")

const orm = {
    select: (table, cb) => {
        let query = `SELECT * FROM ??`;

        connection.query(query, [table], (err, results) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - displaying all burgers, captain...`)
            // console.log(results);
            cb(results);
        });
    },

    create: (table, column, value, cb) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - adding a burger to the database, captain...`)
            cb(result);
        });
    },

    update: (table, column, newVal, whereCol, whereVal) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`This is the ORM - updating burgers_db for you, captain...`)
            cb(result);
        });
    }


    // delete: (table, column, value) => {
    //     let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`

    //     connection.query(deleteQuery, [table, column, value], (err, result) => {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(`This is the ORM - activating delete sequence, captain...`)
    //         console.log(result);
    //     });
    // }
};



// select("burgers");
// orm.create("burgers", "burger_name", "Whammy", "devoured", "TRUE");
// orm.update("burgers", "burger_name", "McRibs", "id", "12");
// orm.delete("burgers", "id", "11");

module.exports = orm;