const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new customer
exports.registerCustomer = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new Customer({ name, email, password: hashedPassword, address });
    await customer.save();
    res.status(201).json({ message: "Customer registered" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login customer
exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get customer details
exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate("orders");
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};