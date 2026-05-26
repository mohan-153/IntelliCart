"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import API from "@/services/axios";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  Eye,
  EyeOff,
} from "lucide-react";

export default function ForgotPassword() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [verified, setVerified] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showPassword, setShowPassword] =
  useState(false);

  

  const validateEmail = () => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("⚠ Enter Email");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("⚠ Enter Valid Email");
      return false;
    }

    setError("");

    return true;
  };

  const handleVerifyEmail = async (
    e
  ) => {

    e.preventDefault();

    if (!validateEmail()) return;

    try {

      setLoading(true);

      const { data } =
        await API.post(
          "/auth/forgot-password",
          { email }
        );

      toast.success(data.message);

      setVerified(true);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  const handleResetPassword =
    async (e) => {

      e.preventDefault();

      if (!newPassword) {
        return toast.error(
          "Enter new password"
        );
      }

      if (newPassword.length < 6) {
        return toast.error(
          "Password must be at least 6 characters"
        );
      }

      try {

        setLoading(true);

        const { data } =
          await API.post(
            "/auth/forgot-password",
            {
              email,
              newPassword,
            }
          );

        toast.success(data.message);

        setTimeout(() => {

          router.push("/login");

        }, 2000);

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Forgot Password
        </h1>

        {/* VERIFY EMAIL FORM */}

        {!verified ? (

          <form
            onSubmit={
              handleVerifyEmail
            }
            className="space-y-5"
          >

            <div>

              <input
                type="email"
                placeholder="Enter Registered Email"
                value={email}
                onChange={(e) => {
                  setEmail(
                    e.target.value
                  );
                  setError("");
                }}
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />

              {error && (
                <p className="text-red-500 text-sm mt-2">
                  {error}
                </p>
              )}

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
            >
              {loading
                ? "Verifying..."
                : "Verify Email"}
            </button>

          </form>

        ) : (

          /* RESET PASSWORD FORM */

          <form
            onSubmit={
              handleResetPassword
            }
            className="space-y-5"
          >

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
            >
              {loading
                ? "Updating..."
                : "Update Password"}
            </button>

          </form>

        )}

      </div>

    </div>
  );
}