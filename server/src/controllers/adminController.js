import User from "../models/User.js";

import Product from "../models/Product.js";

import Order from "../models/Order.js";

/*
|--------------------------------------------------------------------------
| ADMIN ANALYTICS
|--------------------------------------------------------------------------
*/

const getDashboardAnalytics =
  async (req, res) => {

    try {

      /*
      |--------------------------------------------------------------------------
      | TOTAL USERS
      |--------------------------------------------------------------------------
      */

      const totalUsers =
        await User.countDocuments();

      /*
      |--------------------------------------------------------------------------
      | TOTAL PRODUCTS
      |--------------------------------------------------------------------------
      */

      const totalProducts =
        await Product.countDocuments();

      /*
      |--------------------------------------------------------------------------
      | TOTAL ORDERS
      |--------------------------------------------------------------------------
      */

      const totalOrders =
        await Order.countDocuments();

      /*
      |--------------------------------------------------------------------------
      | TOTAL PRODUCTS ORDERED
      |--------------------------------------------------------------------------
      */

      const orderedProducts =
        await Order.aggregate([
          {
            $group: {
              _id: null,

              total: {
                $sum: "$quantity",
              },
            },
          },
        ]);

      /*
      |--------------------------------------------------------------------------
      | UNIQUE CUSTOMERS ORDERED
      |--------------------------------------------------------------------------
      */

      const uniqueCustomers =
        await Order.distinct(
          "user"
        );

      /*
      |--------------------------------------------------------------------------
      | RESPONSE
      |--------------------------------------------------------------------------
      */

      res.json({

        totalUsers,

        totalProducts,

        totalOrders,

        totalOrderedProducts:
          orderedProducts[0]
            ?.total || 0,

        totalCustomersOrdered:
          uniqueCustomers.length,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          error.message,
      });

    }

  };

export {
  getDashboardAnalytics,
};