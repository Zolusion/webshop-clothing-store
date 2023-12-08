import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Questions from '@/components/Questions'
import React from 'react'
import type { Metadata } from "next";

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