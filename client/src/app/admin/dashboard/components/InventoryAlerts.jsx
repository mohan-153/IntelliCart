"use client";



export default function InventoryAlerts() {

  const lowStockProducts = [
    {
      name: "iPhone 15",
      stock: 3,
    },

    {
      name: "Gaming Mouse",
      stock: 2,
    },

    {
      name: "Mechanical Keyboard",
      stock: 4,
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Low Stock Alerts
      </h2>

      <div className="space-y-4">

        {lowStockProducts.map(
          (product, index) => (
            <div
              key={index}
              className="flex justify-between bg-red-50 border border-red-200 p-4 rounded-xl"
            >

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <span className="text-red-600 font-bold">
                {product.stock} Left
              </span>

            </div>
          )
        )}

      </div>

    </div>
  );
}