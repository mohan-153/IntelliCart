"use client";

import {
  FaUsers,
  FaShoppingCart,
  FaRupeeSign,
  FaChartLine,
} from "react-icons/fa";



export default function KPISection() {

  const totalRevenue = 1250000;

  const totalOrders = 845;

  const activeUsers = 340;

  const completedPurchases = 680;

  const visitors = 2500;



  const conversionRate =
    (
      (completedPurchases /
        visitors) *
      100
    ).toFixed(2);



  const AOV = (
    totalRevenue / totalOrders
  ).toFixed(2);



  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

      <KPICard
        title="Revenue"
        value={`₹${totalRevenue}`}
        icon={<FaRupeeSign />}
      />

      <KPICard
        title="Orders"
        value={totalOrders}
        icon={<FaShoppingCart />}
      />

      <KPICard
        title="Active Users"
        value={activeUsers}
        icon={<FaUsers />}
      />

      <KPICard
        title="Conversion"
        value={`${conversionRate}%`}
        icon={<FaChartLine />}
      />

      <KPICard
        title="AOV"
        value={`₹${AOV}`}
        icon={<FaChartLine />}
      />

    </div>
  );
}



function KPICard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
}