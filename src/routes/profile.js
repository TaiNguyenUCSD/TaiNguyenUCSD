const express = require("express");
const router = express.Router();

/* Load Data */

router.get("/", (req, res) => {
  res.render("profile");
});

module.exports = router;
