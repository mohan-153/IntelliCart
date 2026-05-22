"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



export default function SalesChart({
  data,
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="_id.month" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="revenue" />
      </BarChart>
    </ResponsiveContainer>
  );
}