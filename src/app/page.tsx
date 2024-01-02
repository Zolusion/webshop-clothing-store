import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import SaleContainer from "@/components/SaleContainer";
import type { Metadata } from "next";

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