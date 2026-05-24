import Product from "../models/Product.js";



/*
|--------------------------------------------------------------------------
| GET PRODUCTS
|--------------------------------------------------------------------------
*/

export const getProducts =
  async (req, res) => {

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

  };



/*
|--------------------------------------------------------------------------
| GET SINGLE PRODUCT
|--------------------------------------------------------------------------
*/

export const getProductById =
  async (req, res) => {

    try {

      const product =
        await Product.findById(
          req.params.id
        );



      if (!product) {

        return res
          .status(404)
          .json({
            message:
              "Product not found",
          });

      }



      res.json(product);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };