import mongoose from "mongoose";

const flashSaleSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        default: "Flash Sale",
      },

      subtitle: {
        type: String,
        default:
          "Limited Time Offer",
      },

      bannerImage: {
        type: String,
      },

      backgroundImage: {
        type: String,
      },

      days: {
        type: Number,
        default: 0,
      },

      hours: {
        type: Number,
        default: 0,
      },

      minutes: {
        type: Number,
        default: 0,
      },

      discountPercentage: {
        type: Number,
        default: 0,
      },

      flashProducts: [
        {
          type:
            mongoose.Schema.Types
              .ObjectId,

          ref: "Product",
        },
      ],

      active: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

const FlashSale =
  mongoose.models.FlashSale ||
  mongoose.model(
    "FlashSale",
    flashSaleSchema
  );

export default FlashSale;