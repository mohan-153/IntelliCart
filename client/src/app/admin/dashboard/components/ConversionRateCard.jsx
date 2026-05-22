"use client";

import { FaChartLine } from "react-icons/fa";



export default function ConversionRateCard() {

  /*
  |--------------------------------------------------------------------------
  | SAMPLE DATA
  |--------------------------------------------------------------------------
  */

  const totalVisitors = 12500;

  const completedPurchases = 865;



  /*
  |--------------------------------------------------------------------------
  | CONVERSION RATE FORMULA
  |--------------------------------------------------------------------------
  |
  | Conversion Rate =
  | (Completed Purchases / Total Visitors) * 100
  |
  */

  const conversionRate = (
    (completedPurchases /
      totalVisitors) *
    100
  ).toFixed(2);



  /*
  |--------------------------------------------------------------------------
  | PERFORMANCE STATUS
  |--------------------------------------------------------------------------
  */

  const getPerformanceStatus = () => {

    if (conversionRate >= 10) {
      return {
        label: "Excellent",

        color:
          "text-green-600 bg-green-100",
      };
    }

    if (conversionRate >= 5) {
      return {
        label: "Good",

        color:
          "text-blue-600 bg-blue-100",
      };
    }

    if (conversionRate >= 2) {
      return {
        label: "Average",

        color:
          "text-yellow-600 bg-yellow-100",
      };
    }

    return {
      label: "Needs Improvement",

      color:
        "text-red-600 bg-red-100",
    };
  };



  const status =
    getPerformanceStatus();



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm">
            Conversion Rate
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {conversionRate}%
          </h2>

        </div>

        <div className="bg-black text-white p-4 rounded-2xl text-3xl">
          <FaChartLine />
        </div>

      </div>



      {/* STATUS */}

      <div className="mt-6">

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${status.color}`}
        >
          {status.label}
        </span>

      </div>



      {/* ANALYTICS */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="bg-gray-100 rounded-xl p-4">

          <p className="text-gray-500 text-sm">
            Visitors
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {totalVisitors}
          </h3>

        </div>



        <div className="bg-gray-100 rounded-xl p-4">

          <p className="text-gray-500 text-sm">
            Purchases
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {completedPurchases}
          </h3>

        </div>

      </div>



      {/* FORMULA */}

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">

        <p className="text-sm text-blue-700 leading-7">

          Conversion Rate =
          {" "}
          (Completed Purchases ÷
          Total Visitors)
          × 100

        </p>

      </div>

    </div>
  );
}