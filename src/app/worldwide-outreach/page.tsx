import React from 'react'
import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Goals from '@/components/Goals';


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