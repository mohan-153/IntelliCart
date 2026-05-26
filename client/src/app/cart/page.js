"use client";

import { useEffect } from "react";

import Image from "next/image";

import Link from "next/link";

import BackButton from "@/components/BackButton";

import { useRouter } from "next/navigation";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFromCart,
} from "@/redux/slices/cartSlice";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function CartPage() {

  const router = useRouter();

  const dispatch =
    useDispatch();

  const cartItems =
    useSelector(
      (state) =>
        state.cart.cartItems
    );

  // CHECK LOGIN
  useEffect(() => {

    const token =
      sessionStorage.getItem(
        "token"
      );

    if (!token) {

      toast.error(
        "Please login to access cart"
      );

      setTimeout(() => {

        router.push("/login");

      }, 1500);

    }

  }, [router]);

  return (
<>
 <BackButton />

    
    <div className="max-w-7xl mx-auto px-4 py-10">

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      <h1 className="text-5xl font-bold mb-10">

        Shopping Cart

      </h1>

      {cartItems.length === 0 ? (

        <div>

          <h2 className="text-2xl">

            Cart is Empty

          </h2>

          <Link
            href="/products"
            className="text-blue-500"
          >

            Go Shopping

          </Link>

        </div>

      ) : (

        <div className="space-y-6">

          {cartItems.map(
            (item) => (

              <div
                key={item._id}
                className="bg-white p-5 rounded-3xl shadow flex items-center gap-6"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-2xl"
                />

                {/* DETAILS */}

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">

                    {item.name}

                  </h2>

                  <p className="text-3xl font-bold mt-3">

                    ₹{item.price}

                  </p>

                </div>

                {/* REMOVE BUTTON */}

                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart(
                        item._id
                      )
                    )
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition"
                >

                  Remove

                </button>

              </div>

            )
          )}

        </div>

      )}

    </div>

    </>
  );
}