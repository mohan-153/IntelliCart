"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



export default function UserGrowthChart({
  data,
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart data={data}>
        <XAxis dataKey="_id.month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="users"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}