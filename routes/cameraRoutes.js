const express = require("express");
const cameraController = require("../controllers/cameraController");

const router = express.Router();

router.get("/", cameraController.getAllCameras);
router.post("/", cameraController.addCamera);
router.put("/:id", cameraController.updateCamera); // Use the controller function
router.delete("/:id", cameraController.deleteCamera);
// Search cameras by name
router.get("/search", async (req, res) => {
    try {
      const { name } = req.query; // Get the search query from the URL
      const cameras = await Camera.find({ name: { $regex: name, $options: "i" } }); // Case-insensitive search
      res.status(200).json(cameras);
    } catch (error) {
      res.status(500).json({ message: "Error searching cameras", error });
    }
  });

module.exports = router; // Export the router