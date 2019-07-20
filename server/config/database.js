const Sequelize = require("sequelize");

module.exports = new Sequelize("api", "dawid", "Polakinowiecki8.06.2012", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
