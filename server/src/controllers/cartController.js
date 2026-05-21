import Cart from "../models/Cart.js";

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        products: [],
      });
    }

    const productExists = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (productExists) {
      productExists.quantity += quantity;
    } else {
      cart.products.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("products.product");

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { addToCart, getCart };