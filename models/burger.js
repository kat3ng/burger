const orm = require('../config/orm');

const burger = {
    select: (cb) => {
        orm.select("burgers", (results) => {
            cb(results);
        });
    },
    create: (column, values, cb) => {
        orm.create("burgers", column, values, (results) => {
            cb(results);
        });
    },
    update: (column, newVal, whereCol, whereVal, cb) => {
        orm.update("burgers", column, newVal, whereCol, whereVal, (results) => {
            cb(results);
        });
    },

    delete: (status, cb) => {
        orm.delete("burgers", status, (results) => {
            cb(results);
        });
    }
}


module.exports = burger;