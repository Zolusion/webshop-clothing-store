import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import PrivacyPolicy from 'components/PrivacyPolicy'
import React from 'react'
import type { Metadata } from "next";

const title = "Privacy Policy";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

const privacypolicy = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <PrivacyPolicy />
        <Footer />
    </div>
  )
}

export default privacypolicy