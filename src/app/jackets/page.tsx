import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import JacketsComponent from '@/components/JacketsComponent';
import Footer from '@/components/Footer';

const title = "Jackets";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const jackets = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <JacketsComponent />
        <Footer />
    </div>
  )
}

export default jackets