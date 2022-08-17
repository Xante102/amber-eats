const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Define schema and collection
const userSchema = new mongoose.Schema(
  {
    f_name: {
      type: String,
      required: "First Name cannot be empty",
    },
    l_name: {
      type: String,
      required: "Last Name cannot be empty",
    },
    email: {
      type: String,
      required: "Email cannot be empty",
      unique:true
    },
    password: {
      type: String,
      required: "Passwords cannot be empty",
      minlength: [8, "Password must be at least 8 characters long"],
    },
    salt_secret: String,
  },
  {
    collection: "users",
  }
);


// Custom validation for email
userSchema.path("email").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
},"Invalid e-mail.");


// Events
userSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.salt_secret = salt;
      next();
    });
  });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
  return jwt.sign({_id: this._id},
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXP
    })
}

module.exports = mongoose.model("Users", userSchema);
