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



  useEffect(() => {
    fetchProfile();
  }, []);



  const fetchProfile = async () => {
    try {

      const { data } =
        await API.get(
          "/users/profile"
        );

      setUser(data.user);

    } catch (error) {

      console.log(error);

    }
  };



  if (!user) {
    return (
      <div className="p-10">
        Loading Profile...
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md relative">

        {/* BACK BUTTON */}

        <button
          onClick={() => router.back()}
          className="absolute top-5 left-5 bg-black text-white p-3 rounded-full hover:scale-105 transition"
        >
          <FaArrowLeft />
        </button>



        {/* PROFILE ICON */}

        <div className="flex justify-center mb-6">

          <div className="bg-black text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl">

            <FaUserShield />

          </div>

        </div>



        {/* TITLE */}

        <h1 className="text-4xl font-bold text-center mb-8">
          My Profile
        </h1>



        {/* PROFILE DETAILS */}

        <div className="space-y-6">

          <div className="bg-gray-100 p-4 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Name
            </p>

            <h2 className="text-2xl font-bold mt-1">
              {user.name}
            </h2>

          </div>



          <div className="bg-gray-100 p-4 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Email
            </p>

            <h2 className="text-xl font-semibold mt-1 break-all">
              {user.email}
            </h2>

          </div>



          <div className="bg-gray-100 p-4 rounded-2xl">

            <p className="text-gray-500 text-sm">
              Role
            </p>

            <h2 className="text-xl font-bold mt-1 uppercase">
              {user.role}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}