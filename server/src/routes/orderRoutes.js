import express from "express";

import Order from "../models/Order.js";

import Product from "../models/Product.js";

import User from "../models/User.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| BUY NOW
|--------------------------------------------------------------------------
*/

router.post(
  "/buy-now",

  async (req, res) => {

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
              "Missing Data",
          });

      }

      /*
      |--------------------------------------------------------------------------
      | FIND USER
      |--------------------------------------------------------------------------
      */

      const user =
        await User.findById(
          userId
        );

      if (!user) {

        return res
          .status(404)
          .json({
            message:
              "User not found",
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
      | SAVE ADDRESS
      |--------------------------------------------------------------------------
      */

      user.address =
        address;

      await user.save();

      /*
      |--------------------------------------------------------------------------
      | CREATE ORDER
      |--------------------------------------------------------------------------
      */

      const order =
        await Order.create({

          user:
            user._id,

          product:
            product._id,

          address,

          status:
            "Processing",

        });

      res.status(201).json(
        order
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

export default router;