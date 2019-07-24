const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
var models = require("./models");
const session = require("express-session");
var env = require("dotenv").config();
const passport = require("passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", require("./router/index"));
app.use("/users", require("./router/users"));
models.sequelize
  .sync()
  .then(() => {
    console.log("Nice! Database looks fine");
  })
  .catch(err => {
    console.log(err, "Something went wrong with the database");
  });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(` 
    starting development server at http://localhost:8080/ `);
});
