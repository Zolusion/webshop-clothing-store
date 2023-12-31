import React from 'react'
import type { Metadata } from "next";
import Navbar from 'components/Navbar';
import DiscountSectionWithRouter from 'components/Sale';
import Footer from 'components/Footer';

const title = "Sale";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const sale = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <DiscountSectionWithRouter />
        <Footer />
    </div>
  )
}

export default sale