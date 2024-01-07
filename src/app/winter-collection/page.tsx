import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WinterComponent from '@/components/WinterComponent'
import React from 'react'
import type { Metadata } from "next";

const title = "Winter Collection";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const WinterCollection = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <WinterComponent />
        <Footer />
    </div>
  )
}

export default WinterCollection