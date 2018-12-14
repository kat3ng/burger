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
    update: (values, status, cb) => {
        orm.update("burgers", status, values, (results) => {
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