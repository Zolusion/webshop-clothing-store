import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';

const title = "Home";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <ProductGrid />
      <Footer />
    </div>
  )
}
