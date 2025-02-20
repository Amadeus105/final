const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.post("/register", customerController.registerCustomer);
router.post("/login", customerController.loginCustomer);
router.get("/:id", customerController.getCustomer);

module.exports = router;