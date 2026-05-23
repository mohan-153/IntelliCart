"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

import {
  FaEnvelope,
  FaLock,
  FaShoppingCart,
} from "react-icons/fa";

import API from "@/services/axios";

import { loginSuccess } from "@/redux/slices/authSlice";



export default function LoginPage() {

  const router = useRouter();

  const dispatch = useDispatch();



  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });



  const [loading, setLoading] =
    useState(false);



  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });

  };



  /*
  |--------------------------------------------------------------------------
  | HANDLE SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);



      const { data } =
        await API.post(
          "/auth/login",
          formData
        );



      /*
      |--------------------------------------------------------------------------
      | SAVE USER
      |--------------------------------------------------------------------------
      */

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );



      /*
      |--------------------------------------------------------------------------
      | REDUX LOGIN
      |--------------------------------------------------------------------------
      */

      dispatch(
        loginSuccess(data)
      );



      /*
      |--------------------------------------------------------------------------
      | SUCCESS ALERT
      |--------------------------------------------------------------------------
      */

      alert(
        "Login Successful"
      );



      /*
      |--------------------------------------------------------------------------
      | ADMIN REDIRECT
      |--------------------------------------------------------------------------
      */

      if (
        data.role === "admin"
      ) {

        router.push(
          "/admin/dashboard"
        );

      } else {

        /*
        |--------------------------------------------------------------------------
        | USER HOME PAGE
        |--------------------------------------------------------------------------
        */

        router.push("/");

      }

    } catch (error) {

      alert(
        error.response?.data
          ?.message ||
          "Invalid credentials"
      );

    } finally {

      setLoading(false);

    }

  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SECTION */}

        <div className="bg-black text-white p-12 hidden lg:flex flex-col justify-center">

          <div className="flex items-center gap-4 mb-8">

            <div className="bg-white text-black p-4 rounded-2xl text-3xl">

              <FaShoppingCart />

            </div>

            <h1 className="text-4xl font-bold">
              IntelliCart
            </h1>

          </div>

          <h2 className="text-5xl font-bold leading-tight">

            Welcome Back

          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">

            Login to access your
            personalized shopping
            experience, orders,
            analytics, and AI
            powered commerce
            platform.

          </p>

        </div>



        {/* RIGHT SECTION */}

        <div className="p-10 lg:p-14">

          <div className="max-w-md mx-auto">

            <h1 className="text-4xl font-bold mb-3">
              Login
            </h1>

            <p className="text-gray-500 mb-10">
              Access your account
            </p>



            {/* FORM */}

            <form
              onSubmit={
                handleSubmit
              }
              className="space-y-6"
            >

              {/* EMAIL */}

              <div>

                <label className="block text-sm font-semibold mb-2">

                  Email Address

                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    required
                    className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-black"
                  />

                </div>

              </div>



              {/* PASSWORD */}

              <div>

                <label className="block text-sm font-semibold mb-2">

                  Password

                </label>

                <div className="relative">

                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={
                      formData.password
                    }
                    onChange={
                      handleChange
                    }
                    required
                    className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-black"
                  />

                </div>

              </div>



              {/* LOGIN BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition"
              >

                {loading
                  ? "Logging in..."
                  : "Login"}

              </button>

            </form>



            {/* REGISTER */}

            <div className="mt-8 text-center">

              <p className="text-gray-600">

                Don't have an
                account?

              </p>

              <button
                onClick={() =>
                  router.push(
                    "/register"
                  )
                }
                className="mt-3 text-black font-bold hover:underline"
              >

                Create Account

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}