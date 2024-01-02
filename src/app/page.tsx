import type { Metadata } from "next";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ProductGrid from "components/ProductGrid";
import SaleContainer from "components/SaleContainer";
import Footer from "components/Footer";
import React from 'react';

const title = "Home";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

export default async function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ProductGrid  />
      <SaleContainer />
      <Footer />
    </div>
  );
}