const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: String, required: true },
  specifications: {
    resolution: String,
    sensorType: String,
    lensMount: String,
  },
  stock: { type: Number, default: 0 },
}, { timestamps: true });

// Export the Camera model
module.exports = mongoose.model("Camera", cameraSchema);