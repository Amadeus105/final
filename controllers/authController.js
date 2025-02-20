const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// Регистрация нового пользователя
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Проверка, существует ли пользователь
    let existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Проверяем, существует ли пользователь
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: "Invalid username or password" });
  
      // Проверяем пароль
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid username or password" });
  
      // Создаём токен
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
