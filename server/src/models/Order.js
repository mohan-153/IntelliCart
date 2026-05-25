import mongoose from "mongoose";

const orderSchema =
  mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",
      },

      product: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Product",
      },

      quantity: {
        type: Number,
        default: 1,
      },

      shippingAddress: {
        fullName: String,
        mobile: String,
        addressLine: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
      },

      totalPrice: Number,

      status: {
        type: String,
        default: "Pending",
      },
    },
    {
      timestamps: true,
    }
  );

const Order =
  mongoose.models.Order ||
  mongoose.model(
    "Order",
    orderSchema
  );

export default Order;