"use client";

import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";



export default function InventoryForecastChart() {

  const data = [
    {
      month: "Jan",
      stock: 500,
    },

    {
      month: "Feb",
      stock: 430,
    },

    {
      month: "Mar",
      stock: 320,
    },

    {
      month: "Apr",
      stock: 250,
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Inventory Forecast
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="stock"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}