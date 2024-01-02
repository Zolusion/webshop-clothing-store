import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiscountSection from '@/components/Sale';

const title = "Sale";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const sale = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <DiscountSection />
        <Footer />
    </div>
  )
}

export default sale