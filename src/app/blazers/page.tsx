import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import BlazerSale from '@/components/BlazerSale';
import Footer from '@/components/Footer';

const title = "Blazers";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const blazers = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <BlazerSale />
        <Footer />
    </div>
  )
}

export default blazers