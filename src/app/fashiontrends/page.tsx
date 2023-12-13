import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const FashionTrendsPage = dynamic(() => import('@/components/FashionTrendsPage'));

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