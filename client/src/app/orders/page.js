"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";



export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get(
        "/orders"
      );

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              Order ID: {order._id}
            </h2>

            <p className="mt-2">
              Total: ₹{order.totalAmount}
            </p>

            <p>
              Status: {order.status}
            </p>

            <p>
              Payment: {order.paymentMethod}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}