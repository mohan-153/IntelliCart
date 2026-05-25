"use client";

import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import Link from "next/link";

import API from "@/services/axios";

export default function ProductsPage() {

  const searchParams =
    useSearchParams();

  const category =
    searchParams.get(
      "category"
    ) || "";

  const keyword =
    searchParams.get(
      "keyword"
    ) || "";

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /*
  |--------------------------------------------------------------------------
  | FETCH PRODUCTS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          setLoading(true);

          const { data } =
            await API.get(
              `/products?keyword=${keyword}&category=${category}`
            );

          setProducts(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchProducts();

  }, [keyword, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* TITLE */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">

          {category
            ? `${category} Products`
            : "Products"}

        </h1>

        <p className="text-gray-500 mt-3 text-lg">

          {category
            ? `Showing products in ${category}`
            : "Explore all available products"}

        </p>

      </div>

      {/* LOADING */}

      {loading ? (

        <h2 className="text-2xl font-semibold">

          Loading...

        </h2>

      ) : products.length === 0 ? (

        <h2 className="text-2xl font-semibold">

          No Products Found

        </h2>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}

              <div className="h-72 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <p className="text-gray-500 text-sm">

                  {product.category}

                </p>

                <h2 className="text-2xl font-bold mt-2 line-clamp-2">

                  {product.name}

                </h2>

                <div className="flex items-center justify-between mt-5">

                  <p className="text-3xl font-bold">

                    ₹{product.price}

                  </p>

                  <Link
                    href={`/products/${product._id}`}
                  >

                    <button className="bg-black text-white px-5 py-2 rounded-xl">

                      View

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}