console.log(`This is burger-controller, ready for duty...`)

const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// create all routes and set up logic within them
router.get("/", (req, res) => {
    burger.select(function (data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/burger", (req, res) => {
    let newBurger = req.body.name;

    burger.create("burger_name", newBurger, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

router.put("/api/burger/:id", (req, res) => {
    let status = Boolean(req.body.devoured);
    console.log("burger status", status);

    burger.update("devoured", status, "id".req.params.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

router.delete("/api/burger/:id", (req, res) => {
    let status = `id = ${req.params}`;

    burger.delete(status, (results) => {
        if (results.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Exports routes for server.js to use
module.exports = router;