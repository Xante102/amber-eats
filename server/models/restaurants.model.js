const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define schema and collection

const Restaurants = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact_number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  restaurant_logo: {
    type: String,
    required: true,
  },
  registration_status: {
    type: Boolean,
    required: true,
  },
},
{
  collection: 'restaurants'
});

const restaurants = mongoose.model("Restaurants", Restaurants);

module.exports = restaurants;
