"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  FaArrowLeft,
  FaUserShield,
} from "react-icons/fa";

import API from "@/services/axios";

export default function ProfilePage() {

  const router = useRouter();

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /*
  |--------------------------------------------------------------------------
  | FETCH PROFILE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const fetchProfile =
      async () => {

        try {

          /*
          |--------------------------------------------------------------------------
          | GET USER FROM SESSION STORAGE
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
          | NO USER
          |--------------------------------------------------------------------------
          */

          if (!storedUser) {

            router.replace(
              "/login"
            );

            return;
          }

          /*
          |--------------------------------------------------------------------------
          | SET USER DIRECTLY
          |--------------------------------------------------------------------------
          */

          setUser(
            storedUser
          );

        } catch (error) {

          console.log(error);

          router.replace(
            "/login"
          );

        } finally {

          setLoading(false);

        }

      };

    fetchProfile();

  }, [router]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Profile...

      </div>

    );

  }

  /*
  |--------------------------------------------------------------------------
  | NO USER
  |--------------------------------------------------------------------------
  */

  if (!user) {

    return null;

  }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md relative">

        {/* BACK BUTTON */}

        <button
          onClick={() =>
            router.replace("/")
          }
          className="absolute top-5 left-5 bg-black text-white p-3 rounded-full hover:scale-105 transition"
        >

          <FaArrowLeft />

        </button>

        {/* PROFILE ICON */}

        <div className="flex justify-center mb-6">

          <div className="bg-black text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-lg">

            <FaUserShield />

          </div>

        </div>

        {/* TITLE */}

        <h1 className="text-4xl font-bold text-center mb-8">

          My Profile

        </h1>

        {/* NAME */}

        <div className="space-y-5">

          <div className="bg-gray-100 p-4 rounded-2xl">

            <p className="text-gray-500 text-sm mb-1">

              Name

            </p>

            <h2 className="text-2xl font-bold">

              {user.name}

            </h2>

          </div>

          {/* EMAIL */}

          <div className="bg-gray-100 p-4 rounded-2xl">

            <p className="text-gray-500 text-sm mb-1">

              Email

            </p>

            <h2 className="text-lg font-semibold break-all">

              {user.email}

            </h2>

          </div>

          {/* ROLE */}

          <div className="bg-gray-100 p-4 rounded-2xl">

            <p className="text-gray-500 text-sm mb-1">

              Role

            </p>

            <h2 className="text-xl font-bold uppercase">

              {user.role}

            </h2>

          </div>

        </div>

      </div>

    </div>

  );

}