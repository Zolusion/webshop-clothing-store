import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from "next";
import HeelsComponent from '@/components/HeelsComponent';

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