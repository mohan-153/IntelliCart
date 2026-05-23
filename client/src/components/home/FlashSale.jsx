"use client";



export default function FlashSale() {
  return (
    <section className="bg-black text-white rounded-3xl p-10 py-16 my-10 text-center">

      <h2 className="text-5xl font-bold">
        Flash Sale
      </h2>

      <p className="text-xl mt-6 text-gray-300">
        Up To 70% OFF Limited Time
      </p>

      <div className="flex justify-center gap-6 mt-10">

        <TimeBox value="12" label="Hours" />

        <TimeBox value="25" label="Minutes" />

        <TimeBox value="40" label="Seconds" />

      </div>

    </section>
  );
}



function TimeBox({
  value,
  label,
}) {
  return (
    <div className="bg-white text-black px-8 py-5 rounded-2xl">

      <h3 className="text-4xl font-bold">
        {value}
      </h3>

      <p className="mt-2">
        {label}
      </p>

    </div>
  );
}