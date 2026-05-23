"use client";



export default function BannerGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">

      <div className="bg-red-500 rounded-3xl min-h-[280px]"></div>

      <div className="bg-blue-500 rounded-3xl min-h-[280px]"></div>

      <div className="bg-green-500 rounded-3xl min-h-[280px]"></div>

    </section>
  );
}