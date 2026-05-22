"use client";



export default function MarketBasketInsights() {

  const combinations = [
    {
      product: "iPhone",
      paired: "Screen Protector",
      probability: "85%",
    },

    {
      product: "Laptop",
      paired: "Mouse",
      probability: "72%",
    },

    {
      product: "Camera",
      paired: "Tripod",
      probability: "66%",
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Market Basket Analysis
      </h2>

      <div className="space-y-4">

        {combinations.map(
          (item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-xl"
            >

              <h3 className="font-bold">
                {item.product}
              </h3>

              <p className="text-gray-600 mt-1">
                Bought with:
                {" "}
                {item.paired}
              </p>

              <p className="font-semibold mt-2">
                Probability:
                {" "}
                {item.probability}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}