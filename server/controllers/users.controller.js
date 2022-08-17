const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const User = mongoose.model("Users");

module.exports.register = (req, res, next) => {
  const user = new User();
  user.f_name = req.body.f_name;
  user.l_name = req.body.l_name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.save((err, data) => {
    if (err) {
      if (err.code == 11000) {
        return res.status(422).json({
          success: false,
          message: "Duplicate email address found",
        });
      } else return next(err);
    } else res.send(data);
  });
};

module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate("local", (err, user, info) => {
    // error from passport authentication middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) return res.status(200).json({ token: user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (user) return res.status(200).json({ status: true, user: _.pick(user, [ 'f_name', 'l_name', 'email' ]) });
    else
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
  });
};
