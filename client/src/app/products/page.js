"use client";

import {
  useEffect,
  useState,
} from "react";

import { useSearchParams }
  from "next/navigation";

import {
  getProducts,
} from "@/services/productService";



export default function ProductsPage() {

  const params =
    useSearchParams();



  const keyword =
    params.get("keyword") || "";



  const category =
    params.get("category") || "";



  const [products,
    setProducts] =
    useState([]);




  useEffect(() => {

    fetchProducts();

  }, [keyword, category]);



  const fetchProducts =
    async () => {

      const data =
        await getProducts(
          keyword,
          category
        );

      setProducts(data);

    };



  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-10">

        Products

      </h1>



      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map(
          (product) => (

            <div
              key={product._id}
              className="bg-white rounded-3xl shadow p-5"
            >

              <img
                src={
                  product.image
                }
                alt={
                  product.name
                }
                className="w-full h-60 object-cover rounded-2xl"
              />

              <h2 className="text-xl font-bold mt-5">

                {product.name}

              </h2>

              <p className="text-gray-500 mt-2">

                {product.category}

              </p>

              <p className="text-2xl font-bold mt-4">

                ₹{product.price}

              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
}