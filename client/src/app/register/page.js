"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
} from "lucide-react";

import API from "@/services/axios";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {

  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [errors, setErrors] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  /*
  |--------------------------------------------------------------------------
  | VALIDATION
  |--------------------------------------------------------------------------
  */

  const validateForm = () => {

    let valid = true;

    let newErrors = {
      name: "",
      email: "",
      password: "",
    };

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // NAME
    if (!formData.name) {

      newErrors.name =
        "⚠ Enter Name";

      valid = false;
    }

    // EMAIL
    if (!formData.email) {

      newErrors.email =
        "⚠ Enter Email";

      valid = false;

    } else if (
      !emailRegex.test(
        formData.email
      )
    ) {

      newErrors.email =
        "⚠ Enter Valid Email";

      valid = false;
    }

    // PASSWORD
    if (!formData.password) {

      newErrors.password =
        "⚠ Enter Password";

      valid = false;

    } else if (
      formData.password.length < 6
    ) {

      newErrors.password =
        "⚠ Password must be at least 6 characters";

      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

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

    setErrors({
      ...errors,

      [e.target.name]: "",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | REGISTER
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    // VALIDATE
    if (!validateForm())
      return;

    try {

      const { data } =
        await API.post(
          "/auth/register",
          formData
        );

      toast.success(
        data.message
      );

      // GO LOGIN PAGE
      setTimeout(() => {

        router.replace("/login");

      }, 2000);

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
        "Registration Failed"
      );

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-center mb-8">

          SIGN UP

        </h1>

        {/* NAME */}

        <div className="mb-5">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && (

            <p className="text-red-500 text-sm mt-2">

              {errors.name}

            </p>

          )}

        </div>

        {/* EMAIL */}

        <div className="mb-5">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.email && (

            <p className="text-red-500 text-sm mt-2">

              {errors.email}

            </p>

          )}

        </div>

        {/* PASSWORD */}

        <div className="mb-5">

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              className="absolute right-4 top-4 text-gray-600"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >

              {showPassword ? (

                <EyeOff size={22} />

              ) : (

                <Eye size={22} />

              )}

            </button>

          </div>

          {errors.password && (

            <p className="text-red-500 text-sm mt-2">

              {errors.password}

            </p>

          )}

        </div>

        {/* REGISTER BUTTON */}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
        >

          SIGN UP

        </button>

        {/* LOGIN OPTION */}

        <div className="text-center mt-5">

          <p className="text-gray-600">

            Already have an account?{" "}

            <button
              type="button"
              onClick={() =>
                router.push(
                  "/login"
                )
              }
              className="text-blue-600 font-semibold hover:underline"
            >

              Login

            </button>

          </p>

        </div>

      </form>

    </div>
  );
}