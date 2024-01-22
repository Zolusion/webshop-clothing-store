import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import BeautyComponent from '@/components/BeautyComponent';
import Footer from '@/components/Footer';

const title = "Beauty";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const beauty = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <BeautyComponent />
        <Footer />
    </div>
  )
}

export default beauty