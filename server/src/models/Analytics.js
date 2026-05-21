import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    sessionId: {
      type: String,
    },

    eventType: {
      type: String,
      enum: [
        "PAGE_VIEW",
        "PRODUCT_VIEW",
        "ADD_TO_CART",
        "REMOVE_FROM_CART",
        "CHECKOUT",
        "PURCHASE",
        "LOGIN",
        "LOGOUT",
      ],
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    page: {
      type: String,
    },

    device: {
      type: String,
    },

    browser: {
      type: String,
    },

    ipAddress: {
      type: String,
    },

    source: {
      type: String,
    },

    duration: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Analytics = mongoose.model(
  "Analytics",
  analyticsSchema
);

export default Analytics;