const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const orm = require('../config/orm');

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured");