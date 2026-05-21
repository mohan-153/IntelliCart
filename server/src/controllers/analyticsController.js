import Order from "../models/Order.js";
import User from "../models/User.js";



// @desc    Get Sales Analytics
// @route   GET /api/analytics/sales
// @access  Private/Admin

const getSalesAnalytics = async (req, res) => {
  try {
    const salesData = await Order.aggregate([
      {
        $group: {
          _id: {
            month: {
              $month: "$createdAt",
            },
          },

          totalSales: {
            $sum: "$totalAmount",
          },

          totalOrders: {
            $sum: 1,
          },
        },
      },

      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      salesData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Get Top Selling Products
// @route   GET /api/analytics/top-products
// @access  Private/Admin

const getTopProducts = async (req, res) => {
  try {
    const topProducts = await Order.aggregate([
      {
        $unwind: "$products",
      },

      {
        $group: {
          _id: "$products.product",

          totalSold: {
            $sum: "$products.quantity",
          },
        },
      },

      {
        $sort: {
          totalSold: -1,
        },
      },

      {
        $limit: 5,
      },
    ]);

    res.status(200).json({
      success: true,
      topProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Get User Growth Analytics
// @route   GET /api/analytics/users
// @access  Private/Admin

const getUserAnalytics = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          _id: {
            month: {
              $month: "$createdAt",
            },
          },

          totalUsers: {
            $sum: 1,
          },
        },
      },

      {
        $sort: {
          "_id.month": 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Get Revenue Analytics
// @route   GET /api/analytics/revenue
// @access  Private/Admin

const getRevenueAnalytics = async (req, res) => {
  try {
    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,

          totalRevenue: {
            $sum: "$totalAmount",
          },

          averageOrderValue: {
            $avg: "$totalAmount",
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      revenue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export {
  getSalesAnalytics,
  getTopProducts,
  getUserAnalytics,
  getRevenueAnalytics,
};