"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useRouter } from "next/navigation";

import Image from "next/image";

import API from "@/services/axios";

import { useDispatch } from "react-redux";

import { addToCart } from "@/redux/slices/cartSlice";

import BackButton from "@/components/BackButton";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ProductDetailsPage() {

  const params = useParams();

  const router = useRouter();

  const dispatch = useDispatch();

  const { id } = params;

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [showAddress, setShowAddress] =
    useState(false);

  const [address, setAddress] =
    useState({
      fullName: "",
      mobile: "",
      addressLine: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    });

  /*
  |--------------------------------------------------------------------------
  | FETCH PRODUCT
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          const { data } =
            await API.get(
              `/products/${id}`
            );

          setProduct(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    if (id) {

      fetchProduct();

    }

  }, [id]);

  /*
  |--------------------------------------------------------------------------
  | ADDRESS CHANGE
  |--------------------------------------------------------------------------
  */

  const handleAddressChange = (
    e
  ) => {

    setAddress({
      ...address,

      [e.target.name]:
        e.target.value,
    });

  };

  /*
  |--------------------------------------------------------------------------
  | ADD TO CART
  |--------------------------------------------------------------------------
  */

const addToCartHandler = () => {

  // CHECK LOGIN
  const user =
    sessionStorage.getItem(
      "userInfo"
    );

  const token =
    sessionStorage.getItem(
      "token"
    );

  // NOT LOGGED IN
  if (!user || !token) {

    // CLEAR OLD CART
    sessionStorage.removeItem(
      "cartItems"
    );

    toast.error(
      "Please Login To Add Products"
    );

    setTimeout(() => {

      router.push("/login");

    }, 1500);

    return;
  }

  // ADD PRODUCT
  dispatch(
    addToCart(product)
  );

  toast.success(
    "Product Added To Cart"
  );
};
  /*
  |--------------------------------------------------------------------------
  | BUY NOW
  |--------------------------------------------------------------------------
  */

  const buyNowHandler = () => {

    const user = JSON.parse(
      sessionStorage.getItem(
        "userInfo"
      )
    );

    if (!user) {

      toast.error(
        "Please Login First"
      );

      setTimeout(() => {

        router.push("/login");

      }, 1500);

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | SAVE PRODUCT
    |--------------------------------------------------------------------------
    */

    sessionStorage.setItem(
      "checkoutProduct",
      JSON.stringify(product)
    );

    router.push("/checkout");

  };

  /*
  |--------------------------------------------------------------------------
  | PLACE ORDER
  |--------------------------------------------------------------------------
  */

  const placeOrder = async () => {

    try {

      const user = JSON.parse(
        sessionStorage.getItem(
          "userInfo"
        )
      );

      await API.post(
        "/orders/buy-now",
        {
          userId: user._id,

          productId:
            product._id,

          address,
        }
      );

      toast.success(
        "Order placed successfully"
      );

      setShowAddress(false);

      router.push("/orders");

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
        "Order Failed"
      );

    }

  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Product...

      </div>
    );

  }

  /*
  |--------------------------------------------------------------------------
  | PRODUCT NOT FOUND
  |--------------------------------------------------------------------------
  */

  if (!product) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Product Not Found

      </div>
    );

  }

  return (
    <>
<>
  <BackButton />

  ...
</>
      {/* TOAST */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      {/* ADDRESS MODAL */}

      {
        showAddress && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white p-10 rounded-3xl w-full max-w-2xl">

              <h2 className="text-4xl font-bold mb-8">

                Shipping Address

              </h2>

              <div className="grid grid-cols-2 gap-5">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={
                    handleAddressChange
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  onChange={
                    handleAddressChange
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={
                    handleAddressChange
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  onChange={
                    handleAddressChange
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={
                    handleAddressChange
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={
                    handleAddressChange
                  }
                  className="border p-4 rounded-2xl"
                />

              </div>

              <textarea
                name="addressLine"
                placeholder="Full Address"
                onChange={
                  handleAddressChange
                }
                rows="4"
                className="border p-4 rounded-2xl w-full mt-5"
              />

              <div className="flex gap-5 mt-8">

                <button
                  onClick={
                    placeOrder
                  }
                  className="bg-black text-white px-8 py-4 rounded-2xl"
                >

                  Place Order

                </button>

                <button
                  onClick={() =>
                    setShowAddress(
                      false
                    )
                  }
                  className="bg-gray-200 px-8 py-4 rounded-2xl"
                >

                  Cancel

                </button>

              </div>

            </div>

          </div>

        )
      }

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* IMAGE */}

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <div className="relative w-full h-[650px]">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* DETAILS */}

          <div>

            <p className="text-gray-500 text-lg mb-4">

              {product.category}

            </p>

            <h1 className="text-5xl font-bold mb-6 leading-tight">

              {product.name}

            </h1>

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-green-600 text-white px-4 py-1 rounded-full font-semibold">

                ⭐ {product.rating}

              </div>

              <span className="text-gray-500">

                {product.numReviews}
                Reviews

              </span>

            </div>

            <h2 className="text-5xl font-bold mb-8">

              ₹{product.price}

            </h2>

            <p className="text-gray-700 text-lg leading-9 mb-10">

              {product.description}

            </p>

            <div className="mb-8">

              {
                product.countInStock >
                  0 ? (

                  <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

                    In Stock

                  </span>

                ) : (

                  <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full font-semibold">

                    Out Of Stock

                  </span>

                )
              }

            </div>

            <div className="flex gap-5">

              {/* ADD TO CART */}

              <button
                onClick={
                  addToCartHandler
                }
                className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
              >

                Add To Cart

              </button>

              {/* BUY NOW */}

              <button
                onClick={
                  buyNowHandler
                }
                className="border-2 border-black px-10 py-4 rounded-2xl text-2xl font-semibold hover:bg-black hover:text-white transition"
              >

                Buy Now

              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}