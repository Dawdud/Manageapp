const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => res.send("Login Page"));

router.get("/register", (req, res) => res.send("register Page"));

router.post("/login", (req, res) => {
  console.log(req.body);
  res.send();
});

module.exports = router;
