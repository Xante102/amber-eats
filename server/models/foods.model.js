const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define schema and collection

const Foods = new Schema(
  {
    food_name: {
      type: String,
      required: true,
    },
    food_image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    restaurant_id: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "foods",
  }
);

const foods = mongoose.model("Foods", Foods);

module.exports = foods;
