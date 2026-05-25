"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";

export default function OrdersPage() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

      const { data } =
        await API.get(
          `/orders/user/${user._id}`
        );

      setOrders(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-10">

        My Orders

      </h1>

      <div className="space-y-8">

        {orders.length === 0 ? (

          <h2 className="text-2xl font-semibold">

            No Orders Found

          </h2>

        ) : (

          orders.map((order) => (

            <div
              key={order._id}
              onClick={() =>
                window.location.href =
                `/products/${order.product._id}`
              }
              className="bg-white p-6 rounded-3xl cursor-pointer hover:shadow-2xl transition shadow flex gap-8"
            >

              <img
                src={
                  order.product.image
                }
                alt=""
                className="w-40 h-40 object-cover rounded-2xl"
              />

              <div>

                <h2 className="text-3xl font-bold">

                  {
                    order.product.name
                  }

                </h2>

                <p className="text-2xl mt-3">

                  ₹
                  {
                    order.totalPrice
                  }

                </p>

                <p className="mt-3 font-semibold">

                  Status:
                  {" "}
                  {
                    order.status
                  }

                </p>

                <p className="mt-3 text-gray-600">

                  {
                    order
                      ?.shippingAddress
                      ?.addressLine
                  }

                </p>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}