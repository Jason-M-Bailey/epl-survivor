const express = require('express');
const router = express.router();
const Pick = require("../models/picksModels");

router.route("/create").post((req, res) => {
    const team = req.body.team,
    const week = req.body.week,

    const newPick = new Pick({
        team,
        week
    })

    newPick.save();
})

module.exports = router;