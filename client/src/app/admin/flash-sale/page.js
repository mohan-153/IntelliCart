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
  | START SALE
  |--------------------------------------------------------------------------
  */

  const startSale =
    async () => {

      try {

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

      } catch (error) {

        console.log(error);

      }

    };

  /*
  |--------------------------------------------------------------------------
  | STOP SALE
  |--------------------------------------------------------------------------
  */

  const stopSale =
    async () => {

      try {

        await API.put(
          "/flash-sale/stop"
        );

        alert(
          "Flash Sale Stopped"
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">

      <h1 className="text-5xl font-bold mb-10">

        Flash Sale Admin

      </h1>

      <div className="space-y-5">

        {/* TITLE */}

        <input
          type="text"
          name="title"
          placeholder="Flash Sale Title"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* SUBTITLE */}

        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* BANNER */}

        <input
          type="text"
          name="bannerImage"
          placeholder="Banner Image URL"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* BACKGROUND */}

        <input
          type="text"
          name="backgroundImage"
          placeholder="Background Image URL"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* DAYS */}

        <input
          type="number"
          name="days"
          placeholder="Days"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* HOURS */}

        <input
          type="number"
          name="hours"
          placeholder="Hours"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* MINUTES */}

        <input
          type="number"
          name="minutes"
          placeholder="Minutes"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

        {/* DISCOUNT */}

        <input
          type="number"
          name="discountPercentage"
          placeholder="Discount Percentage"
          onChange={
            handleChange
          }
          className="border p-4 rounded-xl w-full"
        />

    

        {/* BUTTONS */}

        <div className="flex gap-5">

          <button
            onClick={
              startSale
            }
            className="bg-black text-white px-8 py-4 rounded-xl"
          >

            Start Sale

          </button>

          <button
            onClick={
              stopSale
            }
            className="bg-red-500 text-white px-8 py-4 rounded-xl"
          >

            Stop Sale

          </button>

        </div>

      </div>

    </div>
  );
}