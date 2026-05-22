"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";



export default function ProductDetails({
  params,
}) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await API.get(
        `/products`
      );

      const selected = data.find(
        (item) => item._id === params.id
      );

      setProduct(selected);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    try {
      await API.post("/cart", {
        productId: product._id,
        quantity: 1,
      });

      alert("Added to cart");
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white rounded-xl shadow p-8 grid md:grid-cols-2 gap-10">
        <img
          src={
            product.image ||
            "https://via.placeholder.com/400"
          }
          alt={product.title}
          className="w-full rounded"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold mt-6">
            ₹{product.price}
          </h2>

          <button
            onClick={addToCart}
            className="mt-6 bg-black text-white px-6 py-3 rounded"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}