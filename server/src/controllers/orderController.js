import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.product");

    if (!cart) {
      return res.status(400).json({
        message: "Cart empty",
      });
    }

    let total = 0;

    cart.products.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    const order = await Order.create({
      user: req.user._id,

      products: cart.products,

      totalAmount: total,

      paymentMethod: req.body.paymentMethod,
    });

    await Cart.findOneAndDelete({
      user: req.user._id,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate("products.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { createOrder, getOrders };