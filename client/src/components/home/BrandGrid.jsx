"use client";



export default function BrandGrid() {

  const brands = [
    "Apple",
    "Nike",
    "Samsung",
    "Adidas",
    "Sony",
    "Puma",
    "LG",
    "Dell",
  ];



  return (
    <section className="py-10">

      <h2 className="text-3xl font-bold mb-8">
        Official Brand Stores
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">

        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 text-center font-semibold hover:shadow-xl transition"
          >

            {brand}

          </div>
        ))}

      </div>

    </section>
  );
}