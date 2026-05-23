"use client";



export default function CategorySlider() {

  const categories = [
    "Electronics",
    "Fashion",
    "Groceries",
    "Sneakers",
    "Beauty",
    "Luxury",
    "Furniture",
    "Gaming",
  ];



  return (
    <section className="py-10">

      <h2 className="text-3xl font-bold mb-8">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow hover:shadow-xl transition p-6 flex flex-col items-center justify-center"
          >

            <div className="w-20 h-20 rounded-full bg-gray-100 mb-4"></div>

            <h3 className="font-semibold text-center">
              {category}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}