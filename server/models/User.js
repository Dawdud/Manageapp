const Sequelize = require("sequelize");

class User extends Model {}
User.init(
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [5, 10]
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: sequelize.STRING,
      allowNull: false
    }
  },
  { sequelize, modelName: "user" }
);
module.exports = User;
