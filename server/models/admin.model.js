const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define schema and collection
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name cannot be empty",
    },
    address: {
      type: String,
      required: "Address cannot be empty",
    },
    contact_number: {
      type: Number,
      required: "Contact number cannot be empty",
      unique:true
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
    status: {
      type: Boolean,
      // required: true,
    },
    salt_secret: String,
  },
  {
    collection: "admin",
  }
);

// Custom validation for email
adminSchema.path("email").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
},"Invalid e-mail.");


// Events
adminSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.salt_secret = salt;
      next();
    });
  });
});

module.exports = mongoose.model("Admin", adminSchema);
