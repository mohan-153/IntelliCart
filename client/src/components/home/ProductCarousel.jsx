"use client";



export default function ProductCarousel() {

  const products = [
    "Laptop",
    "Headphones",
    "Shoes",
    "Mobile",
    "Keyboard",
  ];



  return (
    <section className="py-10">

      <h2 className="text-3xl font-bold mb-8">
        Trending Products
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">

        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[280px] bg-white rounded-3xl shadow p-5"
          >

            <div className="bg-gray-100 h-60 rounded-2xl"></div>

            <h3 className="text-xl font-bold mt-5">
              {product}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}