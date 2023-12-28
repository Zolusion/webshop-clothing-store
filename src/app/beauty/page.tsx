import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Beauty from '@/components/beauty'
import React from 'react'
import type { Metadata } from "next";

const title = "Cosmetica";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const beauty = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Beauty />
        <Footer />
    </div>
  )
}

export default beauty