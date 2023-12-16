import dynamic from "next/dynamic";
import type { Metadata } from "next";

const Footer = dynamic(() => import("@/components/Footer"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const ProductGrid = dynamic(() => import("@/components/ProductGrid"));
const Contact = dynamic(() => import("@/components/Contact"));
const DiscountSection = dynamic(() => import("@/components/Sale"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));

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
      <Contact />
      <DiscountSection />
      <Newsletter />
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
