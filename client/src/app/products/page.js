"use client";

import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import Link from "next/link";

import Image from "next/image";

import API from "@/services/axios";

import BackButton from "@/components/BackButton";

export default function ProductsPage() {

  const searchParams =
    useSearchParams();

  const category =
    searchParams.get(
      "category"
    );

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

          let url = "/products";

          // CATEGORY FILTER
          if (category) {

            url += `?category=${category}`;

          }

          const { data } =
            await API.get(url);

          setProducts(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchProducts();

  }, [category]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Products...

      </div>
    );

  }

  /*
  |--------------------------------------------------------------------------
  | GROUP PRODUCTS BY CATEGORY
  |--------------------------------------------------------------------------
  */

  const groupedProducts =
    products.reduce(
      (acc, product) => {

        const category =
          product.category ||
          "Other";

        if (!acc[category]) {

          acc[category] = [];

        }

        acc[category].push(
          product
        );

        return acc;

      },

      {}
    );

  return (
    <>

      <BackButton />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* PAGE TITLE */}

        <h1 className="text-5xl font-bold mb-3">

          {category
            ? `${category} Products`
            : "All Products"}

        </h1>

        <p className="text-gray-500 text-xl mb-12">

          Explore all available products

        </p>

        {/* CATEGORY SECTIONS */}

        {Object.keys(
          groupedProducts
        ).map((categoryName) => (

          <div
            key={categoryName}
            className="mb-20"
          >

            {/* CATEGORY TITLE */}

            <h2 className="text-4xl font-bold mb-8">

              {categoryName}

            </h2>

            {/* PRODUCTS GRID */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {groupedProducts[
                categoryName
              ].map((product) => (

                <Link
                  key={product._id}
                  href={`/products/${product._id}`}
                  className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
                >

                  {/* IMAGE */}

                  <div className="relative w-full h-80">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* DETAILS */}

                  <div className="p-5">

                    <p className="text-gray-500 mb-2">

                      {product.category}

                    </p>

                    <h3 className="text-2xl font-bold line-clamp-2">

                      {product.name}

                    </h3>

                    <p className="text-3xl font-bold mt-4">

                      ₹{product.price}

                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        ))}

      </div>

    </>
  );
}