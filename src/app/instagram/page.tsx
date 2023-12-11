import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import InstagramAmbassador from '@/components/InstagramAmbassador'
import type { Metadata } from "next";

const title = "Instagram ambassadors";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    // Instagram page
    <div className='bg-white'>
        <Navbar />
        <InstagramAmbassador />
        <Footer />
    </div>
  )
}

export default page