"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import API from "@/services/axios";

export default function AddProductPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      countInStock: "",
      image: "",
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
  | SUBMIT
  |--------------------------------------------------------------------------
  */

  const submitHandler = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post(
        "/products",
        formData
      );

      alert(
        "Product Added Successfully"
      );

      router.push(
        "/products"
      );

    } catch (error) {

      alert(
        error.response?.data
          ?.message ||
          "Error adding product"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        <h1 className="text-5xl font-bold mb-10">

          Add Product

        </h1>

        <form
          onSubmit={
            submitHandler
          }
          className="space-y-6"
        >

          {/* NAME */}

          <div>

            <label className="font-semibold block mb-2">

              Product Name

            </label>

            <input
              type="text"
              name="name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-2xl p-4"
            />

          </div>

          {/* DESCRIPTION */}

          <div>

            <label className="font-semibold block mb-2">

              Description

            </label>

            <textarea
              name="description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              rows="5"
              required
              className="w-full border rounded-2xl p-4"
            />

          </div>

          {/* PRICE */}

          <div>

            <label className="font-semibold block mb-2">

              Price

            </label>

            <input
              type="number"
              name="price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-2xl p-4"
            />

          </div>

          {/* CATEGORY */}

          <div>

            <label className="font-semibold block mb-2">

              Category

            </label>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-2xl p-4"
            >

              <option value="">
                Select Category
              </option>

              <option>
                Electronics
              </option>

              <option>
                Fashion
              </option>

              <option>
                Groceries
              </option>

              <option>
                Sneakers
              </option>

              <option>
                Beauty
              </option>

              <option>
                Luxury
              </option>

              <option>
                Furniture
              </option>

              <option>
                Gaming
              </option>

              <option>
                Healthcare
              </option>

            </select>

          </div>

          {/* BRAND */}

          <div>

            <label className="font-semibold block mb-2">

              Brand

            </label>

            <input
              type="text"
              name="brand"
              value={
                formData.brand
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-2xl p-4"
            />

          </div>

          {/* STOCK */}

          <div>

            <label className="font-semibold block mb-2">

              Stock

            </label>

            <input
              type="number"
              name="countInStock"
              value={
                formData.countInStock
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-2xl p-4"
            />

          </div>

          {/* IMAGE */}

          <div>

            <label className="font-semibold block mb-2">

              Image URL

            </label>

            <input
              type="text"
              name="image"
              value={
                formData.image
              }
              onChange={
                handleChange
              }
              required
              className="w-full border rounded-2xl p-4"
            />

          </div>

          {/* IMAGE PREVIEW */}

          {formData.image && (

            <div>

              <img
                src={
                  formData.image
                }
                alt="preview"
                className="w-64 h-64 object-cover rounded-2xl border"
              />

            </div>

          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-10 py-4 rounded-2xl text-xl font-semibold"
          >

            {loading
              ? "Adding..."
              : "Add Product"}

          </button>

        </form>

      </div>

    </div>
  );
}