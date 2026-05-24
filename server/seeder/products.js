import mongoose from "mongoose";

import dotenv from "dotenv";

import Product from "../src/models/Product.js";

import connectDB from "../src/config/db.js";



dotenv.config();

connectDB();



const categories = [
  "Electronics",
  "Fashion",
  "Groceries",
  "Sneakers",
  "Beauty",
  "Luxury",
  "Furniture",
  "Gaming",
];



const brands = [
  "Apple",
  "Samsung",
  "Nike",
  "Sony",
  "Adidas",
  "Puma",
  "Dell",
  "HP",
];



const generateProducts = () => {

  const products = [];



  for (let i = 1; i <= 100; i++) {

    const category =
      categories[
        Math.floor(
          Math.random() *
            categories.length
        )
      ];



    products.push({
      name: `${category} Product ${i}`,

      description:
        `Premium ${category} product with advanced features.`,

      price:
        Math.floor(
          Math.random() *
            90000
        ) + 1000,

      category,

      brand:
        brands[
          Math.floor(
            Math.random() *
              brands.length
          )
        ],

      countInStock:
        Math.floor(
          Math.random() * 100
        ),

      rating:
        (
          Math.random() * 5
        ).toFixed(1),

      numReviews:
        Math.floor(
          Math.random() * 500
        ),

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    });

  }



  return products;

};



const importData =
  async () => {

    try {

      await Product.deleteMany();

      await Product.insertMany(
        generateProducts()
      );



      console.log(
        "100 Products Added"
      );

      process.exit();

    } catch (error) {

      console.log(error);

      process.exit(1);

    }

  };



importData();