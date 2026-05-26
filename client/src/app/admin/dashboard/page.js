"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import API from "@/services/axios";

export default function AdminDashboard() {

  const router = useRouter();

  const [analytics,
    setAnalytics] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | FETCH ANALYTICS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics =
    async () => {

      try {

        const { data } =
          await API.get(
            "/admin/analytics"
          );

        setAnalytics(data);

      } catch (error) {

        console.log(error);

      }

    };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (!analytics) {

    return (

      <div className="p-10 text-3xl font-bold">

        Loading Dashboard...

      </div>

    );

  }

  return (

    <div className="p-10">

      <h1 className="text-5xl font-bold mb-10">

        Admin Dashboard

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* TOTAL CUSTOMERS */}

        <div className="bg-white shadow-xl rounded-3xl p-8">

          <h2 className="text-xl font-semibold text-gray-500">

            Total Customers

          </h2>

          <p className="text-5xl font-bold mt-5">

            {analytics.totalUsers}

          </p>

        </div>

        {/* TOTAL PRODUCTS */}

        <div
          onClick={() =>
            router.push(
              "/admin/products"
            )
          }
          className="bg-white shadow-xl rounded-3xl p-8 relative cursor-pointer hover:scale-105 transition"
        >

          <span className="absolute top-4 right-6 text-4xl font-bold">

            &gt;

          </span>

          <h2 className="text-xl font-semibold text-gray-500">

            Total Products

          </h2>

          <p className="text-5xl font-bold mt-5">

            {analytics.totalProducts}

          </p>

        </div>

        {/* TOTAL ORDERS */}

        <div
          onClick={() =>
            router.push(
              "/admin/orders"
            )
          }
          className="bg-white shadow-xl rounded-3xl p-8 relative cursor-pointer hover:scale-105 transition"
        >

          <span className="absolute top-4 right-6 text-4xl font-bold">

            &gt;

          </span>

          <h2 className="text-xl font-semibold text-gray-500">

            Total Orders

          </h2>

          <p className="text-5xl font-bold mt-5">

            {analytics.totalOrders}

          </p>

        </div>

        {/* PRODUCTS ORDERED */}

        <div
          onClick={() =>
            router.push(
              "/admin/products-ordered"
            )
          }
          className="bg-white shadow-xl rounded-3xl p-8 relative cursor-pointer hover:scale-105 transition"
        >

          <span className="absolute top-4 right-6 text-4xl font-bold">

            &gt;

          </span>

          <h2 className="text-xl font-semibold text-gray-500">

            Products Ordered

          </h2>

          <p className="text-5xl font-bold mt-5">

            {analytics.productsOrdered}

          </p>

        </div>

      </div>

      {/* CUSTOMERS WHO ORDERED */}

      <div className="mt-10 bg-white shadow-xl rounded-3xl p-8">

        <h2 className="text-2xl font-semibold text-gray-500">

          Customers Who Ordered

        </h2>

        <p className="text-6xl font-bold mt-5">

          {analytics.totalCustomersOrdered}

        </p>

      </div>

    </div>

  );

}