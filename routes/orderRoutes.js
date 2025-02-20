const express = require("express");
const { placeOrder, getOrder, getAllOrders } = require("../controllers/orderController");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Разрешено всем авторизованным пользователям
router.post("/", authenticateUser, placeOrder);

// Получение всех заказов (только для админов)
router.get("/", authenticateUser, authorizeAdmin, getAllOrders);

// Получение конкретного заказа (доступно авторизованным пользователям)
router.get("/:id", authenticateUser, getOrder);

module.exports = router;
