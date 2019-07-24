const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      freezeTableName: true,
      instanceMathods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        }
      }
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
