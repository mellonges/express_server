const express = require('express');
const router = express.Router()
const Registry = require('../models/registUser')

router.post("/", async (req, res) => {
    try {
        const registr = new Registry({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        await registr.save()
        res.status(200);
    } catch (e) {
        res.json(e.message)
    }
});


module.exports = router