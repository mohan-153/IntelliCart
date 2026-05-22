"use client";



export default function CLVPredictionCard() {

  const averagePurchaseValue = 5000;

  const purchaseFrequency = 6;

  const customerLifespan = 3;



  const CLV =
    averagePurchaseValue *
    purchaseFrequency *
    customerLifespan;



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Customer Lifetime Value
      </h2>

      <div className="text-center mt-10">

        <h1 className="text-5xl font-bold">
          ₹{CLV}
        </h1>

        <p className="text-gray-500 mt-4">
          Estimated Customer Value
        </p>

      </div>

    </div>
  );
}