import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WishlistComponent from '@/components/WishlistComponent'
import React from 'react'

const Wishlist = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <WishlistComponent />
        <Footer />
    </div>
  )
}

export default Wishlist