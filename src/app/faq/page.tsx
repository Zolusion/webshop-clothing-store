import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Navbar from 'components/Navbar';
import Questions from 'components/Questions';
import Footer from 'components/Footer';

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