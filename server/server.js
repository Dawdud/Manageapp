const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const passport = require("passport");

const db = require("./config/database");
app.use(cors());
app.use("/", require("./router/index"));
app.use("/users", require("./router/users"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT || 8080, () => {
  console.log(` 
    starting development server at http://localhost:8080/ `);
});

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log(`Error: ${err}`));
