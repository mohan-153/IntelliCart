"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";



export default function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");

      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!cart) {
    return (
      <div className="p-10">
        Loading Cart...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="space-y-5">
        {cart.products.map((item) => (
          <div
            key={item.product._id}
            className="bg-white p-5 rounded-xl shadow flex justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">
                {item.product.title}
              </h2>

              <p>
                Quantity: {item.quantity}
              </p>
            </div>

            <h2 className="text-xl font-bold">
              ₹
              {item.product.price *
                item.quantity}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}