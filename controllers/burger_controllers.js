const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {

    res.render("index", {
        burgers: res
    });

    // burger.select(controllerCallback);
});

// router.get("/api/all-burgers", (req, res) => {
//     res.render("")
// })

router.post("/burgers", (req, res) => {
    People.create(req.body.burger_name, () => {
        res.redirect("/");
    });
});

module.exports = router;