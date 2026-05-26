import Order from "../models/Order.js";

import Product from "../models/Product.js";

/*
|--------------------------------------------------------------------------
| CREATE ORDER
|--------------------------------------------------------------------------
*/

const createOrder = async (
  req,
  res
) => {

  try {

    const {
      userId,
      productId,
      address,
    } = req.body;

    /*
    |--------------------------------------------------------------------------
    | VALIDATION
    |--------------------------------------------------------------------------
    */

    if (
      !userId ||
      !productId
    ) {

      return res
        .status(400)
        .json({
          message:
            "Missing required fields",
        });

    }

    /*
    |--------------------------------------------------------------------------
    | FIND PRODUCT
    |--------------------------------------------------------------------------
    */

    const product =
      await Product.findById(
        productId
      );

    if (!product) {

      return res
        .status(404)
        .json({
          message:
            "Product not found",
        });

    }

    /*
    |--------------------------------------------------------------------------
    | CREATE ORDER
    |--------------------------------------------------------------------------
    */

    const order =
      await Order.create({

        user: userId,

        product:
          product._id,

        quantity: 1,

        shippingAddress:
          address,

        totalPrice:
          product.price,

        status:
          "Pending",

      });

    /*
    |--------------------------------------------------------------------------
    | SUCCESS
    |--------------------------------------------------------------------------
    */

    res.status(201).json({

      message:
        "Order placed successfully",

      order,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        error.message ||
        "Server Error",

    });

  }

};

/*
|--------------------------------------------------------------------------
| GET ORDERS
|--------------------------------------------------------------------------
*/

const getOrders = async (
  req,
  res
) => {

  try {

    const { userId } =
      req.params;

    const orders =
      await Order.find({

        user: userId,

      }).populate(
        "product"
      );

    res.json(orders);

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        error.message,

    });

  }

};

export {
  createOrder,
  getOrders,
};