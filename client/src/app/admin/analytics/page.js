"use client";

import { useEffect, useState } from "react";

import {
  getMonthlySales,
  getUserGrowth,
} from "@/services/analyticsService";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function AnalyticsPage() {
  const [sales, setSales] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const salesData =
        await getMonthlySales();

      const userData =
        await getUserGrowth();

      setSales(salesData.sales);

      setUsers(userData.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SALES */}

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">
            Revenue Analytics
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={sales}>
              <XAxis dataKey="_id.month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* USER GROWTH */}

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold mb-5">
            User Growth
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={users}>
              <XAxis dataKey="_id.month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}