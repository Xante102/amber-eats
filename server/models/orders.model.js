const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define schema and collection

const Orders = new Schema(
  {
    food_id: {
      type: String,
      required: true,
    },
    order_date: {
      type: Date,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    delivery_charge: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    order_code: {
      type: String,
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
    },
    restaurant_id: {
      type: String,
      required: true,
    },
    driver_id: {
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

const orders = mongoose.model("Orders", Orders);

module.exports = orders;
