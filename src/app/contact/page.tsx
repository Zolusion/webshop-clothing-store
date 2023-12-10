import ContactForm from '@/components/ContactForm'
import React from 'react'
import type { Metadata } from "next";

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