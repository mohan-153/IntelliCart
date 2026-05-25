"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  getProducts,
} from "@/services/productService";

export default function DealsSection() {

  const [products,
    setProducts] =
    useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
    async () => {

      try {

        const data =
          await getProducts();

        /*
        |--------------------------------------------------------------------------
        | SHOW ONLY FIRST 4 PRODUCTS
        |--------------------------------------------------------------------------
        */

        const randomDeals =
          data
            .sort(
              () => 0.5 - Math.random()
            )
            .slice(0, 4);

        setProducts(randomDeals);

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-xl font-bold mb-10">

        Today Deals

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {products.map((product) => (

          <Link
            key={product._id}
            href={`/products/${product._id}`}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

              {/* IMAGE */}

              <div className="h-80 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <h3 className="text-2xl font-bold line-clamp-2">

                  {product.name}

                </h3>

                <div className="flex items-center justify-between mt-5">

                  <p className="text-3xl font-bold">

                    ₹{product.price}

                  </p>

                  <button className="bg-black text-white px-5 py-2 rounded-xl">

                    View

                  </button>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}