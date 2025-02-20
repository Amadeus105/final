const Camera = require("../models/Camera"); // Import the Camera model

// Get all cameras
exports.getAllCameras = async (req, res) => {
  try {
    const cameras = await Camera.find(); // Use Camera.find() to fetch all cameras
    res.status(200).json(cameras);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cameras", error });
  }
};

// Add a new camera
exports.addCamera = async (req, res) => {
  try {
    const newCamera = new Camera(req.body);
    await newCamera.save();
    res.status(201).json(newCamera);
  } catch (error) {
    res.status(500).json({ message: "Error adding camera", error });
  }
};

// Update a camera by ID
exports.updateCamera = async (req, res) => {
  try {
    const updatedCamera = await Camera.findByIdAndUpdate(
      req.params.id, // Camera ID
      req.body,      // Updated data
      { new: true }  // Return the updated document
    );
    if (!updatedCamera) {
      return res.status(404).json({ message: "Camera not found" });
    }
    res.status(200).json(updatedCamera);
  } catch (error) {
    res.status(500).json({ message: "Error updating camera", error });
  }
};

// Delete a camera by ID
exports.deleteCamera = async (req, res) => {
  try {
    const deletedCamera = await Camera.findByIdAndDelete(req.params.id);
    if (!deletedCamera) {
      return res.status(404).json({ message: "Camera not found" });
    }
    res.status(200).json({ message: "Camera deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting camera", error });
  }
};