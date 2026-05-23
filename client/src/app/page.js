"use client";

import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/footer/Footer";

import HeroSection from "@/components/home/HeroSection";

import CategorySlider from "@/components/home/CategorySlider";

import DealsSection from "@/components/home/DealsSection";

import BrandGrid from "@/components/home/BrandGrid";

import BannerGrid from "@/components/home/BannerGrid";

import ProductCarousel from "@/components/home/ProductCarousel";

import FlashSale from "@/components/home/FlashSale";

import Newsletter from "@/components/home/Newsletter";



export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          {/* HERO */}

          <HeroSection />



          {/* CATEGORIES */}

          <CategorySlider />



          {/* DEALS */}

          <DealsSection />



          {/* BRANDS */}

          <BrandGrid />



          {/* BANNERS */}

          <BannerGrid />



          {/* PRODUCTS */}

          <ProductCarousel />



          {/* FLASH SALE */}

          <FlashSale />



          {/* NEWSLETTER */}

          <Newsletter />

        </div>

      </main>

      <Footer />
    </>
  );
}