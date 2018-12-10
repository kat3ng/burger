const connection = require('./connection.js');

let orm = {
    selectAll: (table) => {
        let query = `SELECT * FROM ??`

        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            console.log(result);
            console.log(`I'm here - selectAll`);
        });
    },

    insertOne: (table, column, value) => {
        let insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value]);
        console.log(`I'm here - insertOne`)
    },

    updateOne: (table, column, columnValue, id, value) => {
        let updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, columnValue, id, value]);
        console.log(`I'm here - updateOne`)
    }
}

module.exports = orm;