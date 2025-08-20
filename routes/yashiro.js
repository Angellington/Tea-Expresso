const express = require('express');
const router = express.Router();

router.all('/yashiro', function (req, res) {
    console.log("User Page Called");
    res.end();
});

module.exports = router