import React from 'react'
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Beauty from 'components/Beauty';
import type { Metadata } from "next";

const title = "Beauty";

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