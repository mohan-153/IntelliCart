"use client";



export default function CouponAnalytics() {

  const coupons = [
    {
      code: "SAVE10",
      usage: 120,
    },

    {
      code: "FEST50",
      usage: 85,
    },

    {
      code: "NEWUSER",
      usage: 230,
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Coupon Analytics
      </h2>

      <div className="space-y-4">

        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-100 p-4 rounded-xl"
          >

            <h3 className="font-bold">
              {coupon.code}
            </h3>

            <span className="font-semibold">
              {coupon.usage} Uses
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}