"use client";

import { useEffect, useState } from "react";

import API from "@/services/axios";

export default function FlashSale() {

  const [sale, setSale] =
    useState(null);

  const [timeLeft, setTimeLeft] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | GET FLASH SALE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    const fetchSale =
      async () => {

        try {

          const { data } =
            await API.get(
              "/flash-sale"
            );

          setSale(data);

        } catch (error) {

          console.log(error);

        }

      };

    fetchSale();

  }, []);

  /*
  |--------------------------------------------------------------------------
  | TIMER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    if (!sale || !sale.active)
      return;

    const endTime =
      new Date(
        sale.createdAt
      ).getTime() +
      sale.hours *
        60 *
        60 *
        1000;

    const timer =
      setInterval(() => {

        const now =
          new Date().getTime();

        const distance =
          endTime - now;

        if (distance <= 0) {

          clearInterval(
            timer
          );

          setSale(null);

          return;

        }

        const hours =
          Math.floor(
            distance /
              (1000 *
                60 *
                60)
          );

        const minutes =
          Math.floor(
            (distance %
              (1000 *
                60 *
                60)) /
              (1000 * 60)
          );

        const seconds =
          Math.floor(
            (distance %
              (1000 * 60)) /
              1000
          );

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });

      }, 1000);

    return () =>
      clearInterval(timer);

  }, [sale]);

  /*
  |--------------------------------------------------------------------------
  | HIDE SECTION
  |--------------------------------------------------------------------------
  */

  if (
    !sale ||
    !sale.active ||
    !timeLeft
  ) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="bg-black rounded-[40px] text-white py-20 text-center">

        <h2 className="text-6xl font-bold">

          Flash Sale

        </h2>

        <p className="text-2xl mt-6">

          Up To 70% OFF
          Limited Time

        </p>

        <div className="flex justify-center gap-8 mt-14">

          {/* HOURS */}

          <div className="bg-white text-black rounded-3xl px-10 py-8">

            <h3 className="text-6xl font-bold">

              {
                timeLeft.hours
              }

            </h3>

            <p className="mt-3 text-xl">

              Hours

            </p>

          </div>

          {/* MINUTES */}

          <div className="bg-white text-black rounded-3xl px-10 py-8">

            <h3 className="text-6xl font-bold">

              {
                timeLeft.minutes
              }

            </h3>

            <p className="mt-3 text-xl">

              Minutes

            </p>

          </div>

          {/* SECONDS */}

          <div className="bg-white text-black rounded-3xl px-10 py-8">

            <h3 className="text-6xl font-bold">

              {
                timeLeft.seconds
              }

            </h3>

            <p className="mt-3 text-xl">

              Seconds

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}