"use client";

import { useState } from "react";

import API from "@/services/axios";

export default function FlashSaleAdmin() {

  const [formData, setFormData] =
    useState({
      title: "",
      subtitle: "",
      bannerImage: "",
      backgroundImage: "",
      days: 0,
      hours: 0,
      minutes: 0,
      discountPercentage: 0,
      flashProducts: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });

  };

  const submitHandler =
    async () => {

      await API.post(
        "/flash-sale",
        {
          ...formData,

          flashProducts:
            formData.flashProducts
              .split(",")
              .map((id) =>
                id.trim()
              ),
        }
      );

      alert(
        "Flash Sale Started"
      );

    };

  const stopHandler =
    async () => {

      await API.put(
        "/flash-sale/stop"
      );

      alert(
        "Flash Sale Stopped"
      );

    };

  return (
    <div className="max-w-3xl mx-auto py-16">

      <h1 className="text-5xl font-bold mb-10">

        Flash Sale Admin

      </h1>

      <div className="space-y-5">

        <input
          name="title"
          placeholder="Title"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          name="subtitle"
          placeholder="Subtitle"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          name="bannerImage"
          placeholder="Banner Image URL"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          name="backgroundImage"
          placeholder="Background Image URL"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          type="number"
          name="days"
          placeholder="Days"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          type="number"
          name="hours"
          placeholder="Hours"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          type="number"
          name="minutes"
          placeholder="Minutes"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <input
          type="number"
          name="discountPercentage"
          placeholder="Discount %"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        <textarea
          name="flashProducts"
          placeholder="Product IDs separated by commas"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full h-40"
        />

        <div className="flex gap-5">

          <button
            onClick={
              submitHandler
            }
            className="bg-black text-white px-10 py-4 rounded-xl"
          >

            Start Flash Sale

          </button>

          <button
            onClick={
              stopHandler
            }
            className="bg-red-500 text-white px-10 py-4 rounded-xl"
          >

            Stop Flash Sale

          </button>

        </div>

      </div>

    </div>
  );
}