"use client";

import { useRouter } from "next/navigation";

import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {

  const router = useRouter();

  const handleBack = () => {

    // CHECK HISTORY
    if (window.history.length > 1) {

      router.back();

    } else {

      // FALLBACK
      router.push("/");

    }

  };

  return (

    <button
      onClick={handleBack}
      className="fixed top-24 left-6 z-50 bg-black text-white p-2 rounded-full shadow-lg hover:scale-105 transition"
    >

      <FaArrowLeft />

    </button>

  );
}