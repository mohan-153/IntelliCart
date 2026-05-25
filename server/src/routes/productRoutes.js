import express from "express";

import Product from "../models/Product.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| GET ALL PRODUCTS
|--------------------------------------------------------------------------
*/

router.get("/", async (req, res) => {

  try {

    const keyword =
      req.query.keyword
        ? {
            name: {
              $regex:
                req.query.keyword,
              $options: "i",
            },
          }
        : {};

    const category =
      req.query.category
        ? {
            category:
              req.query.category,
          }
        : {};

    const products =
      await Product.find({
        ...keyword,
        ...category,
      });

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

});

/*
|--------------------------------------------------------------------------
| GET SINGLE PRODUCT
|--------------------------------------------------------------------------
*/

router.get("/:id", async (req, res) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (product) {

      res.json(product);

    } else {

      res.status(404).json({
        message:
          "Product not found",
      });

    }

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

});

/*
|--------------------------------------------------------------------------
| ADD PRODUCT
|--------------------------------------------------------------------------
*/

router.post("/", async (req, res) => {

  try {

    const product =
      new Product({
        name:
          req.body.name,

        description:
          req.body.description,

        price:
          req.body.price,

        category:
          req.body.category,

        brand:
          req.body.brand,

        countInStock:
          req.body.countInStock,

        image:
          req.body.image,
      });

    const createdProduct =
      await product.save();

    res.status(201).json(
      createdProduct
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

});

export default router;  