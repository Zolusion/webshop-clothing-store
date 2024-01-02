import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ShippingInfo from 'components/ShippingInfo'
import React from 'react'

const shippinginfo = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <ShippingInfo />
        <Footer />
    </div>
  )
}

export default shippinginfo