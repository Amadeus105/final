const Order = require("../models/Order");
const Camera = require("../models/Camera");
const Customer = require("../models/Customer");

// Place an order
exports.placeOrder = async (req, res) => {
    const { customer_id, ordered_items, shipping_address } = req.body;
    
    try {
      let total_price = 0;
      
      // Проверяем все камеры и рассчитываем цену
      const processedItems = await Promise.all(ordered_items.map(async (item) => {
        const camera = await Camera.findById(item.camera_id);
        if (!camera) throw new Error(`Camera not found: ${item.camera_id}`);
        
        total_price += camera.price * item.quantity;
  
        return {
          camera_id: camera._id,
          name: camera.name,  // Встраиваем название камеры
          price: camera.price, // Встраиваем цену
          quantity: item.quantity,
        };
      }));
  
      const order = new Order({
        customer_id,
        ordered_items: processedItems,
        total_price,
        shipping_address,
      });
  
      await order.save();
  
      // Добавляем заказ к пользователю
      await Customer.findByIdAndUpdate(customer_id, { $push: { orders: order._id } });
  
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

  exports.getOrder = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id)
        .populate("customer_id")
        .populate({
          path: "ordered_items.camera_id",
          model: "Camera",
        });
  
      res.json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find()
        .populate("customer_id")
        .populate({
          path: "ordered_items.camera_id",
          model: "Camera",
        });
  
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  

