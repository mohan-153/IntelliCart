"use client";

import Link from "next/link";



export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">

      {/* MAIN BANNER */}

      <div className="lg:col-span-2 bg-gradient-to-r from-blue-900 to-indigo-700 rounded-3xl p-10 text-white relative overflow-hidden min-h-[420px] flex flex-col justify-center">

        <h1 className="text-5xl font-bold leading-tight max-w-xl">
          iPhone 16 Pro Max
        </h1>

        <p className="text-xl mt-6 text-gray-200">
          Smart. Powerful. Premium.
        </p>

        <Link
          href="/products"
          className="mt-8 bg-white text-black w-fit px-8 py-4 rounded-2xl font-semibold"
        >
          Shop Now
        </Link>

        <img
          src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
          alt="Hero"
          className="absolute right-0 bottom-0 h-full object-cover opacity-40"
        />

      </div>



      {/* SIDE BANNERS */}

      <div className="flex flex-col gap-6">

        <div className="bg-cyan-500 rounded-3xl p-8 text-white min-h-[200px] flex flex-col justify-center">

          <h2 className="text-3xl font-bold">
            Up To 50% OFF
          </h2>

          <p className="mt-3">
            Sports Shoes Collection
          </p>

        </div>



        <div className="bg-pink-500 rounded-3xl p-8 text-white min-h-[200px] flex flex-col justify-center">

          <h2 className="text-3xl font-bold">
            Grocery Deals
          </h2>

          <p className="mt-3">
            Fresh Daily Essentials
          </p>

        </div>

      </div>

    </section>
  );
}