const express = require("express");
const router = express.Router();



router.get("/register", (req, res) => res.send("register Page"));


router.post("/login", (req, res) => {
  console.log(req.body.email);
  res.send();
});

module.exports = router;
