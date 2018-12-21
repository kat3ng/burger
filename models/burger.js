const orm = require('../config/orm');

const burger = {
    select: (callback) => {
        orm.select("burgers", (results) => {
            callback(results);
        });
    },
    create: (column, values, callback) => {
        orm.create("burgers", column, values, (results) => {
            callback(results);
        });
    },
    update: (column, newVal, whereCol, whereVal, callback) => {
        orm.update("burgers", column, newVal, whereCol, whereVal, (results) => {
            callback(results);
        });
    },
    //delete function for later versions
    // delete: (status, callback) => {
    //     orm.delete("burgers", status, (results) => {
    //         callback(results);
    //     });
    // }
}


module.exports = burger;