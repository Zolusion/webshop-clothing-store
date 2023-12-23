import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Questions from '@/components/Questions';

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