"use client";

import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserSecret,
} from "react-icons/fa";



export default function ActiveUsersCard() {

  /*
  |--------------------------------------------------------------------------
  | DEMO LIVE USER DATA
  |--------------------------------------------------------------------------
  */

  const userAnalytics = {
    totalUsers: 15420,

    dailyActiveUsers: 2480,

    monthlyActiveUsers: 9840,

    guestUsers: 620,

    onlineNow: 182,
  };



  /*
  |--------------------------------------------------------------------------
  | ACTIVE USER PERCENTAGE
  |--------------------------------------------------------------------------
  */

  const activePercentage = (
    (
      userAnalytics.dailyActiveUsers /
      userAnalytics.totalUsers
    ) * 100
  ).toFixed(1);



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            Active Users
          </h2>

          <p className="text-gray-500 mt-1">
            Real-time customer activity
          </p>
        </div>

        {/* LIVE INDICATOR */}

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <span className="text-sm font-semibold text-green-600">
            LIVE
          </span>

        </div>

      </div>



      {/* MAIN ONLINE CARD */}

      <div className="bg-black text-white rounded-2xl p-6 mb-6">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-300">
              Online Right Now
            </p>

            <h1 className="text-5xl font-bold mt-3">
              {userAnalytics.onlineNow}
            </h1>

          </div>

          <FaUsers className="text-6xl opacity-80" />

        </div>

      </div>



      {/* USER ANALYTICS GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* TOTAL USERS */}

        <AnalyticsCard
          title="Total Users"
          value={userAnalytics.totalUsers}
          icon={<FaUsers />}
          bg="bg-blue-100"
        />



        {/* DAILY ACTIVE */}

        <AnalyticsCard
          title="Daily Active"
          value={userAnalytics.dailyActiveUsers}
          icon={<FaUserCheck />}
          bg="bg-green-100"
        />



        {/* MONTHLY ACTIVE */}

        <AnalyticsCard
          title="Monthly Active"
          value={userAnalytics.monthlyActiveUsers}
          icon={<FaUserClock />}
          bg="bg-yellow-100"
        />



        {/* GUEST USERS */}

        <AnalyticsCard
          title="Guest Users"
          value={userAnalytics.guestUsers}
          icon={<FaUserSecret />}
          bg="bg-red-100"
        />

      </div>



      {/* ACTIVITY RATE */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <h3 className="font-semibold">
            Daily Engagement Rate
          </h3>

          <span className="font-bold">
            {activePercentage}%
          </span>

        </div>

        {/* PROGRESS BAR */}

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

          <div
            className="bg-green-500 h-4 rounded-full"
            style={{
              width: `${activePercentage}%`,
            }}
          ></div>

        </div>

      </div>

    </div>
  );
}



/*
|--------------------------------------------------------------------------
| ANALYTICS CARD
|--------------------------------------------------------------------------
*/

function AnalyticsCard({
  title,
  value,
  icon,
  bg,
}) {
  return (
    <div
      className={`${bg} rounded-2xl p-5`}
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-600">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
}