const bCrypt = require("bcrypt-nodejs");

module.exports = (passport, user) => {
  const User = user;
  const localStrategy = require("passport-local").Strategy;

  passport.use(
    "local-signup",
    new localStrategy({
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    })
  );
  (req, email, password, done) => {
    const generateHash = password => {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    User.findOne({ where: { email: email } }).then(() => {
      if (user) {
        return done(null, { message: "That email is already taken" });
      } else {
        const userPassword = generateHash(password);
        const data = {
          email: email,
          password: userPassword
        };
        User.create(data).then((newUser, created) => {
          if (!newUser) {
            return done(null, false);
          }
          if (newUser) {
            return done(null, newUser);
          }
        });
      }
    });
  };
};
