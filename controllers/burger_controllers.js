const express = require("express");
const burger = require("../models/burger");
const router = express.Router();


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
    burger.create([
        "burger", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], (results) => {
        res.json({
            id: results.insertID
        });
    });
});

router.put("/api/burger/:id", (req, res) => {
    let status = `id = ${req.params.id}`;

    console.log("burger status", status);

    burger.update({
        devoured: req.body.devoured
    }, status, (results) => {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
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