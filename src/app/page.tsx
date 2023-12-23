import dynamic from "next/dynamic";
import type { Metadata } from "next";
import SaleContainer from "@/components/SaleContainer";

const Footer = dynamic(() => import("@/components/Footer"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const ProductGrid = dynamic(() => import("@/components/ProductGrid"));

const title = "Home";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

export default async function Home() {
  // const products = await getData();
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Products={products.data} */}
      <ProductGrid  />
      <SaleContainer />
      <Footer />
    </div>
  );
}

// async function getData() {
//   const res = await fetch("https://solmazadmin.com/api/products");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }
