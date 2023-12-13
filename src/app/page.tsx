import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const Footer = dynamic(() => import('@/components/Footer'));
const HeroSection = dynamic(() => import('@/components/HeroSection'));
const Navbar = dynamic(() => import('@/components/Navbar'));
const ProductGrid = dynamic(() => import('@/components/ProductGrid'));
const Contact = dynamic(() => import('@/components/Contact'));
const DiscountSection = dynamic(() => import('@/components/Sale'));
const Newsletter = dynamic(() => import('@/components/Newsletter'));

const title = "Home";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

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
  );
}
