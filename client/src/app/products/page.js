"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import API from "@/services/axios";



export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get(
        "/products"
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}
          >
            <div className="bg-white rounded-xl shadow p-5">
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/300"
                }
                alt={product.title}
                className="w-full h-60 object-cover rounded"
              />

              <h2 className="text-xl font-bold mt-4">
                {product.title}
              </h2>

              <p className="text-gray-600 mt-2">
                ₹{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}