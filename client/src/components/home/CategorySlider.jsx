"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";



export default function CategorySlider() {

  const router = useRouter();



  /*
  |--------------------------------------------------------------------------
  | CATEGORY DATA
  |--------------------------------------------------------------------------
  */

  const categories = [
    {
      name: "Electronics",

      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      name: "Fashion",

      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },

    {
      name: "Groceries",

      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e",
    },

    {
      name: "Healthcare",

      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
    },

    {
      name: "Beauty",

      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },

    {
      name: "Luxury",

      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },

    {
      name: "Furniture",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },

    {
      name: "Gaming",

      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },
  ];



  return (
    <section className="py-14">

      <h2 className="text-5xl font-bold mb-12">

        Explore Categories

      </h2>



      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">

        {categories.map(
          (category, index) => (

            <button
              key={index}

              onClick={() =>
                router.push(
                  `/products?category=${category.name}`
                )
              }

              className="bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center hover:-translate-y-2"
            >

              {/* IMAGE */}

              <div className="relative w-28 h-28 mb-5">

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="rounded-full object-cover"
                />

              </div>



              {/* TITLE */}

              <h3 className="font-bold text-lg text-center">

                {category.name}

              </h3>

            </button>

          )
        )}

      </div>

    </section>
  );
}