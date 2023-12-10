import Footer from '@/components/Footer'
import HelpCenter from '@/components/HelpCenter'
import Navbar from '@/components/Navbar'
import React from 'react'
import type { Metadata } from "next";

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