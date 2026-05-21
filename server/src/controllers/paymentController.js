import Order from "../models/Order.js";



// @desc    Cash On Delivery Payment
// @route   POST /api/payments/cod
// @access  Private

const cashOnDelivery = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.paymentMethod = "COD";

    order.status = "Processing";

    await order.save();

    res.status(200).json({
      success: true,
      message: "Cash on Delivery selected",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Fake Online Payment Simulation
// @route   POST /api/payments/online
// @access  Private

const onlinePayment = async (req, res) => {
  try {
    const { orderId, transactionId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.paymentMethod = "ONLINE";

    order.status = "Paid";

    order.transactionId = transactionId;

    await order.save();

    res.status(200).json({
      success: true,
      message: "Payment successful",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// @desc    Get Payment Details
// @route   GET /api/payments/:id
// @access  Private

const getPaymentDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Payment details not found",
      });
    }

    res.status(200).json({
      success: true,
      payment: {
        orderId: order._id,
        paymentMethod: order.paymentMethod,
        totalAmount: order.totalAmount,
        paymentStatus: order.status,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export {
  cashOnDelivery,
  onlinePayment,
  getPaymentDetails,
};