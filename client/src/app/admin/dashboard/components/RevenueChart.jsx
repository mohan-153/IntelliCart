"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



export default function RevenueChart() {

  const data = [
    {
      month: "Jan",
      revenue: 40000,
    },

    {
      month: "Feb",
      revenue: 70000,
    },

    {
      month: "Mar",
      revenue: 95000,
    },

    {
      month: "Apr",
      revenue: 120000,
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Revenue Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <AreaChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}