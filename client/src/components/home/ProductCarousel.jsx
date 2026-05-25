"use client";

import { useRouter } from "next/navigation";

export default function ProductCarousel() {

  const router = useRouter();

  const trendingProducts = [
    {
      name: "Laptop",

      category: "Electronics",

      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      name: "Headphones",

      category: "Electronics",

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      name: "Mobile",

      category: "Electronics",

      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      name: "Fashion",

      category: "Fashion",

      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <h2 className="text-5xl font-bold mb-12">

        Trending Products

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {trendingProducts.map(
          (item, index) => (

            <div
              key={index}
              onClick={() =>
                router.push(
                  `/products?category=${item.category}`
                )
              }
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >

              {/* IMAGE */}

              <div className="h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <h3 className="text-3xl font-bold">

                  {item.name}

                </h3>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}