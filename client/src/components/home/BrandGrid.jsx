"use client";

export default function BrandGrid() {

  const brands = [
    {
      name: "Apple",
      website: "https://www.apple.com",
    },

    {
      name: "Nike",
      website: "https://www.nike.com",
    },

    {
      name: "Samsung",
      website: "https://www.samsung.com",
    },

    {
      name: "Adidas",
      website: "https://www.adidas.com",
    },

    {
      name: "Sony",
      website: "https://www.sony.com",
    },

    {
      name: "Puma",
      website: "https://in.puma.com",
    },

    {
      name: "LG",
      website: "https://www.lg.com",
    },

    {
      name: "Dell",
      website: "https://www.dell.com",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <h2 className="text-3xl font-bold mb-12">

        Official Brand Stores

      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5">

        {brands.map((brand, index) => (

          <a
            key={index}
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 h-20 flex items-center justify-center font-bold text-xl"
          >

            {brand.name}

          </a>

        ))}

      </div>

    </section>
  );
}