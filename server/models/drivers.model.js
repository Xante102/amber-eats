const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define schema and collection

const Drivers = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact_number: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt_secret: {
      type: String,
      required: true,
    },
    profile_picture: {
      type: String,
      required: true,
    },
    drivers_liscense: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "drivers",
  }
);

const drivers = mongoose.model("Drivers", Drivers);

module.exports = drivers;
