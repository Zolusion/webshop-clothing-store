import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const Navbar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const AboutInfo = dynamic(() => import('@/components/AboutInfo'));

const title = "About";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <AboutInfo />
            <Footer />
        </div>
    )
}

export default page