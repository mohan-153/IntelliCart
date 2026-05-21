import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";



// @desc    Get Admin Dashboard Statistics
// @route   GET /api/admin/dashboard
// @access  Private/Admin

const getDashboardStats = async (req, res) => {
  try {
    // TOTAL USERS
    const totalUsers = await User.countDocuments();

    // TOTAL PRODUCTS
    const totalProducts = await Product.countDocuments();

    // TOTAL ORDERS
    const totalOrders = await Order.countDocuments();

    // TOTAL REVENUE
    const revenueResult = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const totalRevenue =
      revenueResult.length > 0
        ? revenueResult[0].totalRevenue
        : 0;

    // RECENT ORDERS
    const recentOrders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,

      statistics: {
        totalUsers,
        totalProducts,
        totalOrders,
        totalRevenue,
      },

      recentOrders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Get All Users
// @route   GET /api/admin/users
// @access  Private/Admin

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Delete User
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Get All Orders
// @route   GET /api/admin/orders
// @access  Private/Admin

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product");

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Update Order Status
// @route   PUT /api/admin/orders/:id
// @access  Private/Admin

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export {
  getDashboardStats,
  getAllUsers,
  deleteUser,
  getAllOrders,
  updateOrderStatus,
};