import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    price: Number,

    stock: Number,

    image: String,

    category: String,

    ratings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;