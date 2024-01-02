import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

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