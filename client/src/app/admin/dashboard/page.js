"use client";

import KPISection from "./components/KPISection";

import RevenueChart from "./components/RevenueChart";

import InventoryAlerts from "./components/InventoryAlerts";

import OrdersMatrix from "./components/OrdersMatrix";

import UserSegmentation from "./components/UserSegmentation";

import TrafficSourceChart from "./components/TrafficSourceChart";

import CartAbandonmentChart from "./components/CartAbandonmentChart";

import CLVPredictionCard from "./components/CLVPredictionCard";

import InventoryForecastChart from "./components/InventoryForecastChart";

import MarketBasketInsights from "./components/MarketBasketInsights";

import NotificationPanel from "./components/NotificationPanel";



export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold mb-8">
        IntelliCart AI Dashboard
      </h1>



      {/* KPI SECTION */}

      <KPISection />



      {/* SALES + TRAFFIC */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <RevenueChart />

        <TrafficSourceChart />

      </div>



      {/* CUSTOMER ANALYTICS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <CartAbandonmentChart />

        <UserSegmentation />

      </div>



      {/* INVENTORY */}

      <div className="mt-8">

        <InventoryAlerts />

      </div>



      {/* ORDERS */}

      <div className="mt-8">

        <OrdersMatrix />

      </div>



      {/* AI + ML */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <CLVPredictionCard />

        <InventoryForecastChart />

        <MarketBasketInsights />

      </div>



      {/* MARKETING */}

      <div className="mt-8">

        <NotificationPanel />

      </div>

    </div>
  );
}