"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";



export default function Navbar() {
  const router = useRouter();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    router.push("/login");
  };

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        IntelliCart
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/products">
          Products
        </Link>

        <Link href="/cart">
          Cart
        </Link>

        <Link href="/orders">
          Orders
        </Link>

        <Link href="/profile">
          Profile
        </Link>

        <button
          onClick={logoutHandler}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}