import Link from "next/link";

import Image from "next/image";



export default function ProductCard({
  product,
}) {

  return (
    <Link
      href={`/products/${product._id}`}
    >

      <div className="bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer">

        {/* IMAGE */}

        <div className="relative w-full h-72">

          <Image
            src={
              product.image ||
              "https://via.placeholder.com/300"
            }

            alt={product.name}

            fill

            className="object-cover"
          />

        </div>



        {/* DETAILS */}

        <div className="p-5">

          <h2 className="text-2xl font-bold mb-3 line-clamp-1">

            {product.name}

          </h2>



          <p className="text-gray-500 mb-4">

            {product.category}

          </p>



          <h3 className="text-3xl font-bold">

            ₹{product.price}

          </h3>

        </div>

      </div>

    </Link>
  );
}