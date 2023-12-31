import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Navbar from 'components/Navbar';
import FashionTrendsPage from 'components/FashionTrendsPage';
import Footer from 'components/Footer';

const title = "Fashion Trends";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <FashionTrendsPage />
        <Footer />
    </div>
  )
}

export default page