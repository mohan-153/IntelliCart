"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";



export default function AdminProductsPage() {
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
        Product Management
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                Stock
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b"
              >
                <td className="p-4">
                  {product.title}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  ₹{product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}