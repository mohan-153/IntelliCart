"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function CartAbandonmentChart() {

  const data = [
    {
      stage: "Added To Cart",
      users: 500,
    },

    {
      stage: "Checkout Started",
      users: 350,
    },

    {
      stage: "Payment Completed",
      users: 200,
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Cart Abandonment
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="stage" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="users" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}