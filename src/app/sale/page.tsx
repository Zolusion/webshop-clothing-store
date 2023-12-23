import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import DiscountSection from '@/components/Sale'
import React from 'react'

const sale = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <DiscountSection />
        <Footer />
    </div>
  )
}

export default sale