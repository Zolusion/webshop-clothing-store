import React from 'react'
import type { Metadata } from "next";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const Goals = dynamic(() => import('@/components/Goals'));

const title = "Our Goal";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Goals />
        <Footer />
    </div>
  )
}

export default page