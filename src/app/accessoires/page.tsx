import React from 'react'
import type { Metadata } from "next";
import Navbar from 'components/Navbar';
import Accessoires from 'components/Accessoires';
import Footer from 'components/Footer';

const title = "Accessoires";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const accessoires = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Accessoires />
        <Footer />
    </div>
  )
}

export default accessoires