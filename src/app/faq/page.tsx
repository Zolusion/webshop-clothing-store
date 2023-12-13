import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const Questions = dynamic(() => import('@/components/Questions'));

const title = "FAQ";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Questions />
        <Footer />
    </div>
  )
}

export default page