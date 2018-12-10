// MODEL >> DATA >>DATABASE

//RESPONSIBILITY

// to abstract the interaction away from the developer and server as a wrapper and convenience method

const orm = require('../config/orm');

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured");