import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactForm = dynamic(() => import('@/components/ContactForm'));

const title = "Contact";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default page