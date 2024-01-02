import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Footer from '@/components/Footer';

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