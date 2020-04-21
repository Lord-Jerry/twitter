const router = require("express").Router();

router
.route("/register")
.post((req, res) => res.send("registered"));

module.exports = router;
