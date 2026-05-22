"use client";

import { FaChartLine } from "react-icons/fa";



export default function AOVCard() {

  /*
  |--------------------------------------------------------------------------
  | DEMO DATA
  |--------------------------------------------------------------------------
  */

  const totalRevenue = 1250000;

  const totalOrders = 845;



  /*
  |--------------------------------------------------------------------------
  | AOV CALCULATION
  |--------------------------------------------------------------------------
  |
  | AOV = Total Revenue / Total Orders
  |
  */

  const AOV = (
    totalRevenue / totalOrders
  ).toFixed(2);



  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition duration-300">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
            Average Order Value
          </p>

          <h2 className="text-4xl font-bold mt-3">
            ₹{AOV}
          </h2>

        </div>



        {/* ICON */}

        <div className="bg-black text-white p-4 rounded-2xl text-3xl">

          <FaChartLine />

        </div>

      </div>



      {/* FOOTER */}

      <div className="mt-6 border-t pt-4">

        <p className="text-sm text-gray-500">
          Based on
          {" "}
          <span className="font-semibold text-black">
            {totalOrders}
          </span>
          {" "}
          completed orders
        </p>

      </div>

    </div>
  );
}