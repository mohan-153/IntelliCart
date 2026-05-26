"use client";

import { useState, useEffect, } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import API from "@/services/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {

    window.history.pushState(
      null,
      "",
      window.location.href
    );

    window.onpopstate = () => {

      window.history.go(1);

    };

  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      email: "",
      password: "",
    };

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "⚠ Enter Email";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "⚠ Enter Valid Email";
      valid = false;
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "⚠ Enter Password";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "⚠ Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await API.post("/auth/login", formData);

      toast.success("Login Successful");

      sessionStorage.clear();

      sessionStorage.setItem(
        "token",
        res.data.token
      );

      sessionStorage.setItem(
        "userInfo",
        JSON.stringify(res.data.user)
      );

      setTimeout(() => {
        router.replace("/");
      }, 1000);
    } catch (error) {
      const message =
        error.response?.data?.message || "Invalid credentials";

      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          {/* EMAIL */}

          <div className="mb-5">

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) => {

                handleChange(e);

                const emailRegex =
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                  e.target.value &&
                  !emailRegex.test(
                    e.target.value
                  )
                ) {

                  setErrors((prev) => ({
                    ...prev,
                    email:
                      "⚠ Please enter a valid email address",
                  }));

                }

              }}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (

              <p className="text-red-500 text-sm mt-2">

                {errors.email}

              </p>

            )}

          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-blue-600 hover:underline text-sm"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Login
          </button>

          {/* SIGN UP OPTION */}
          <div className="text-center pt-2">

            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}

              <button
                type="button"
                onClick={() => router.push("/register")}
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign Up
              </button>

            </p>

          </div>
        </form>
      </div>
    </div>
  );
}