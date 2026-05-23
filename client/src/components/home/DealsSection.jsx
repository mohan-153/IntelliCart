"use client";



export default function DealsSection() {

  const deals = [
    {
      name: "Samsung S24 Ultra",
      price: 99999,
    },

    {
      name: "Nike Shoes",
      price: 4999,
    },

    {
      name: "Gaming Chair",
      price: 12999,
    },

    {
      name: "Smart Watch",
      price: 7999,
    },
  ];



  return (
    <section className="py-10">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Today Deals
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow hover:shadow-xl transition p-5"
          >

            <div className="bg-gray-100 h-60 rounded-2xl"></div>

            <h3 className="font-bold text-xl mt-5">
              {deal.name}
            </h3>

            <p className="text-2xl font-bold mt-3">
              ₹{deal.price}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}