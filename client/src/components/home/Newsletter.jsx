"use client";

import { useState } from "react";



export default function Newsletter() {

  const [email, setEmail] =
    useState("");



  const subscribeHandler = () => {
    alert(
      `Subscribed with ${email}`
    );

    setEmail("");
  };



  return (
    <section className="bg-white rounded-3xl shadow p-10 my-14 text-center">

      <h2 className="text-4xl font-bold">
        Subscribe Newsletter
      </h2>

      <p className="text-gray-500 mt-4">
        Get latest deals and offers
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border rounded-2xl px-5 py-4 w-full md:w-[400px]"
        />

        <button
          onClick={subscribeHandler}
          className="bg-black text-white px-8 py-4 rounded-2xl"
        >
          Subscribe
        </button>

      </div>

    </section>
  );
}