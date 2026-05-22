"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";



export default function TrafficSourceChart() {

  const data = [
    {
      source: "Google Ads",
      users: 400,
    },

    {
      source: "Instagram",
      users: 250,
    },

    {
      source: "Direct",
      users: 300,
    },

    {
      source: "Email",
      users: 150,
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Traffic Sources
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="users"
            nameKey="source"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (
              <Cell key={index} />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}