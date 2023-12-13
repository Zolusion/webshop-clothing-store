import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const Footer = dynamic(() => import('@/components/Footer'));
const HelpCenter = dynamic(() => import('@/components/HelpCenter'));
const Navbar = dynamic(() => import('@/components/Navbar'));

const title = "HelpCenter";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <HelpCenter />
        <Footer />
    </div>
  )
}

export default page