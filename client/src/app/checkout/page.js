"use client";

import { useState } from "react";

import API from "@/services/axios";



export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const placeOrder = async () => {
    try {
      await API.post("/orders", {
        paymentMethod,
      });

      alert("Order placed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <select
          className="w-full border p-3 rounded mb-5"
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
        >
          <option value="COD">
            Cash On Delivery
          </option>

          <option value="ONLINE">
            Online Payment
          </option>
        </select>

        <button
          onClick={placeOrder}
          className="w-full bg-black text-white p-3 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}