import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import HeelsComponent from '@/components/HeelsComponent';
import Footer from '@/components/Footer';

const title = "Heels";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const heels = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <HeelsComponent />
        <Footer />
    </div>
  )
}

export default heels