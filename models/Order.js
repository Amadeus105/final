const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true, index: true },
  ordered_items: [
    {
      camera_id: { type: mongoose.Schema.Types.ObjectId, ref: "Camera" },
      name: String, // Embed camera name for faster lookup
      price: Number, // Embed price to avoid extra DB queries
      quantity: Number,
    },
  ],
  total_price: { type: Number, required: true },
  shipping_address: { // ✅ Added shipping details as a nested document
    street: String,
    city: String,
    postal_code: String,
    country: String,
  },
  order_date: { type: Date, default: Date.now, index: true }, // Indexed for performance
});

module.exports = mongoose.model("Order", orderSchema);
