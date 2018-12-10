const connection = require('./connection');
// const server = require("./keys")

let orm = {
    selectAll: (table) => {
        let query = `SELECT * FROM ??`

        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
            console.log(`Displaying all burgers, captain...`)
        });
    },

    insertOne: (table, column, value) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value]);
        console.log(`Adding a burger to the database, captain...`)
    },

    updateOne: (table, column, columnValue, id, value) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, columnValue, id, value]);
        console.log(`Updating burgers_db for you, captain...`)
    }
}

// orm.selectAll("burgers");
// orm.insertOne("burgers", "burger_name", "Quarter Pounder with Cheese", "devoured", "TRUE");
// orm.updateOne("burgers", "burger_name", "McRibs", "id", "11");

module.exports = orm;