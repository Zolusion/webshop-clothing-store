import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Image from "next/legacy/image"
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Contact from '@/components/Contact';
import DiscountSection from '@/components/Sale';
import Newsletter from '@/components/Newsletter';
import type { Metadata } from "next";

const title = "Home";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <Contact />
      <DiscountSection />
      <Newsletter />
      <Footer />
    </div>
  )
}
