"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import API from "@/services/axios";

import BackButton from "@/components/BackButton";

export default function OrdersPage() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /*
  |--------------------------------------------------------------------------
  | FETCH ORDERS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

      try {

        const storedUser =
          JSON.parse(
            sessionStorage.getItem(
              "userInfo"
            )
          );

        if (!storedUser) {

          return;

        }

        const { data } =
          await API.get(
            `/orders/${storedUser._id}`
          );

        console.log(data);

        setOrders(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Orders...

      </div>
    );

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <BackButton />

      <h1 className="text-5xl font-bold mb-10">

        My Orders

      </h1>

      {
        orders.length === 0 ? (

          <h2 className="text-3xl font-semibold">

            No Orders Found

          </h2>

        ) : (

          <div className="space-y-8">

            {
              orders.map(
                (order) => (

                  <div
                    key={order._id}
                    className="bg-white p-6 rounded-3xl shadow-lg"
                  >

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                      {/* PRODUCT IMAGE */}

                      <div className="relative w-full h-[300px]">

                        <Image
                          src={
                            order.product
                              ?.image
                          }
                          alt={
                            order.product
                              ?.name
                          }
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover rounded-2xl"
                        />

                      </div>

                      {/* PRODUCT DETAILS */}

                      <div className="lg:col-span-2">

                        <h2 className="text-3xl font-bold mb-4">

                          {
                            order.product
                              ?.name
                          }

                        </h2>

                        <p className="text-4xl font-bold mb-4">

                          ₹
                          {
                            order.totalPrice
                          }

                        </p>

                        <div className="space-y-2 text-lg">

                          <p>

                            <span className="font-bold">

                              Status:

                            </span>{" "}

                            {
                              order.status
                            }

                          </p>

                          <p>

                            <span className="font-bold">

                              Quantity:

                            </span>{" "}

                            {
                              order.quantity
                            }

                          </p>

                        </div>

                        {/* ADDRESS */}

                        <div className="mt-6 bg-gray-100 p-5 rounded-2xl">

                          <h3 className="text-2xl font-bold mb-3">

                            Delivery Address

                          </h3>

                          <p>

                            {
                              order
                                .shippingAddress
                                ?.fullName
                            }

                          </p>

                          <p>

                            {
                              order
                                .shippingAddress
                                ?.mobile
                            }

                          </p>

                          <p>

                            {
                              order
                                .shippingAddress
                                ?.addressLine
                            }

                          </p>

                          <p>

                            {
                              order
                                .shippingAddress
                                ?.city
                            }
                            ,{" "}
                            {
                              order
                                .shippingAddress
                                ?.state
                            }

                          </p>

                          <p>

                            {
                              order
                                .shippingAddress
                                ?.postalCode
                            }

                          </p>

                          <p>

                            {
                              order
                                .shippingAddress
                                ?.country
                            }

                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )
            }

          </div>

        )
      }

    </div>

  );

}