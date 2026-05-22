"use client";

import Link from "next/link";

import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/footer/Footer";



export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        
        {/* HERO SECTION */}

        <section className="bg-black text-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              IntelliCart AI
            </h1>

            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Professional AI Powered MERN
              E-Commerce Platform with
              Analytics Dashboard
            </p>

            <div className="mt-10 flex justify-center gap-5 flex-wrap">
              <Link
                href="/products"
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
              >
                Explore Products
              </Link>

              <Link
                href="/admin/dashboard"
                className="border border-white px-8 py-4 rounded-lg font-semibold"
              >
                Admin Dashboard
              </Link>
            </div>
          </div>
        </section>



        {/* FEATURES */}

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-14">
              Platform Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <FeatureCard
                title="Authentication"
                description="Secure JWT based authentication system with admin and customer roles."
              />

              <FeatureCard
                title="Analytics Dashboard"
                description="Advanced charts, revenue analytics, user growth, and sales tracking."
              />

              <FeatureCard
                title="AI Commerce"
                description="Enterprise architecture with scalable MERN stack integration."
              />

            </div>
          </div>
        </section>



        {/* QUICK LINKS */}

        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-14">
              Quick Access
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <QuickLink
                href="/login"
                title="Login"
              />

              <QuickLink
                href="/register"
                title="Register"
              />

              <QuickLink
                href="/products"
                title="Products"
              />

              <QuickLink
                href="/cart"
                title="Cart"
              />

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}



/*
|--------------------------------------------------------------------------
| FEATURE CARD
|--------------------------------------------------------------------------
*/

function FeatureCard({
  title,
  description,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-8">
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}



/*
|--------------------------------------------------------------------------
| QUICK LINK CARD
|--------------------------------------------------------------------------
*/

function QuickLink({
  href,
  title,
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-10 text-center">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
      </div>
    </Link>
  );
}