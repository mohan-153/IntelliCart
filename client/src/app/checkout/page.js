"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import API from "@/services/axios";
import BackButton from "@/components/BackButton";

export default function CheckoutPage() {

  const router = useRouter();

  const [product, setProduct] =
    useState(null);

  const [showForm, setShowForm] =
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
  | LOAD PRODUCT + USER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const storedProduct =
      JSON.parse(
        sessionStorage.getItem(
          "checkoutProduct"
        )
      );

    const storedUser =
      JSON.parse(
        sessionStorage.getItem(
          "userInfo"
        )
      );

    /*
    |--------------------------------------------------------------------------
    | NO USER
    |--------------------------------------------------------------------------
    */

    if (!storedUser) {

      alert(
        "Please login first"
      );

      router.push(
        "/login"
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | NO PRODUCT
    |--------------------------------------------------------------------------
    */

    if (!storedProduct) {

      alert(
        "Product not found"
      );

      router.push(
        "/products"
      );

      return;
    }

    setProduct(
      storedProduct
    );

    /*
    |--------------------------------------------------------------------------
    | EXISTING ADDRESS
    |--------------------------------------------------------------------------
    */

    if (
      storedUser.address
    ) {

      setAddress(
        storedUser.address
      );

      setShowForm(false);

    } else {

      setShowForm(true);

    }

  }, [router]);

  /*
  |--------------------------------------------------------------------------
  | HANDLE INPUT CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (
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
  | CHANGE ADDRESS
  |--------------------------------------------------------------------------
  */

  const changeAddress =
    () => {

      setShowForm(true);

    };

  /*
  |--------------------------------------------------------------------------
  | PLACE ORDER
  |--------------------------------------------------------------------------
  */

  const placeOrder =
    async () => {

      try {

        /*
        |--------------------------------------------------------------------------
        | GET USER
        |--------------------------------------------------------------------------
        */

        const storedUser =
          JSON.parse(
            sessionStorage.getItem(
              "userInfo"
            )
          );

        /*
        |--------------------------------------------------------------------------
        | VALIDATION
        |--------------------------------------------------------------------------
        */

        if (
          !address.fullName ||
          !address.mobile ||
          !address.addressLine ||
          !address.city ||
          !address.state ||
          !address.postalCode ||
          !address.country
        ) {

          alert(
            "Please fill all address fields"
          );

          return;
        }

        /*
        |--------------------------------------------------------------------------
        | SAVE ADDRESS
        |--------------------------------------------------------------------------
        */

        await API.put(
          `/users/profile/${storedUser._id}`,
          {
            address,
          }
        );

        /*
        |--------------------------------------------------------------------------
        | CREATE ORDER
        |--------------------------------------------------------------------------
        */

        await API.post(
          "/orders/buy-now",
          {
            userId:
              storedUser._id,

            productId:
              product._id,

            address,
          }
        );

        /*
        |--------------------------------------------------------------------------
        | UPDATE LOCAL STORAGE
        |--------------------------------------------------------------------------
        */

        sessionStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...storedUser,
            address,
          })
        );

        /*
        |--------------------------------------------------------------------------
        | SUCCESS
        |--------------------------------------------------------------------------
        */

        alert(
          "Order placed successfully"
        );

        router.push(
          "/orders"
        );

      } catch (error) {

        console.log(error);

        alert(
          error?.response?.data?.message ||
          error.message ||
          "Order Failed"
        );

      }

    };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (!product) {

    return null;

  }

  return (

    <>
  <BackButton />



    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-10">

        Checkout

      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* PRODUCT */}

        <div className="bg-white p-8 rounded-3xl shadow">

          <div className="relative w-full h-[450px]">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-2xl"
            />

          </div>

          <h2 className="text-4xl font-bold mt-8">

            {product.name}

          </h2>

          <p className="text-5xl font-bold mt-5">

            ₹{product.price}

          </p>

        </div>

        {/* ADDRESS */}

        <div className="bg-white p-8 rounded-3xl shadow">

          <div className="flex justify-between items-center">

            <h2 className="text-4xl font-bold">

              Delivery Address

            </h2>

            {
              !showForm && (

                <button
                  onClick={
                    changeAddress
                  }
                  className="text-blue-600 font-semibold"
                >

                  Change

                </button>

              )
            }

          </div>

          {
            !showForm ? (

              <div className="mt-8 space-y-3">

                <h3 className="text-3xl font-bold">

                  {address.fullName}

                </h3>

                <p>

                  {address.addressLine}

                </p>

                <p>

                  {address.city},{" "}
                  {address.state}

                </p>

                <p>

                  {address.postalCode}

                </p>

                <p>

                  {address.country}

                </p>

                <p>

                  {address.mobile}

                </p>

              </div>

            ) : (

              <div className="grid grid-cols-2 gap-5 mt-8">

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={address.fullName}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={address.mobile}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={address.city}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={address.state}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={address.postalCode}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={address.country}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl"
                />

                <textarea
                  name="addressLine"
                  placeholder="Full Address"
                  value={address.addressLine}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl col-span-2"
                  rows="4"
                />

              </div>

            )
          }

          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-5 rounded-2xl text-2xl font-bold mt-10"
          >

            Confirm Order

          </button>

        </div>

      </div>

    </div>

    </>
  );

}