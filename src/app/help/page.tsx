import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import HelpCenter from 'components/HelpCenter';

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