const orm = require('../config/orm');

const burger = {
    select: (callback) => {
        orm.selectAll("burgers");
        callback(result);
    },
    create: (values, callback) => {
        orm.insertOne("burgers", values, callback);
        callback(result);
    },
    update: (values, callback) => {
        orm.updateOne("burgers", values, callback);
        callback(result);
    }
}


module.exports = burger;