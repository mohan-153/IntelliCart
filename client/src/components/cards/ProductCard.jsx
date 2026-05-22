import Link from "next/link";



export default function ProductCard({
  product,
}) {
  return (
    <Link
      href={`/products/${product._id}`}
    >
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <img
          src={
            product.image ||
            "https://via.placeholder.com/300"
          }
          alt={product.title}
          className="w-full h-60 object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-4">
          {product.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {product.category}
        </p>

        <h3 className="text-2xl font-bold mt-3">
          ₹{product.price}
        </h3>
      </div>
    </Link>
  );
}