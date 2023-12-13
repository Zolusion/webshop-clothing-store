import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const ContactForm = dynamic(() => import('@/components/ContactForm'));

const title = "Contact";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
  return (
    <div className='bg-black'>
        <ContactForm />
    </div>
  )
}

export default page