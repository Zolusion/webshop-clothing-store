import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";

const Footer = dynamic(() => import('@/components/Footer'));
const AboutSection = dynamic(() => import('@/components/AboutSection'));
const AboutInfo = dynamic(() => import('@/components/AboutInfo'));
const AboutContact = dynamic(() => import('@/components/AboutContact'));

const title = "About";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

const page = () => {
    return (
        <div className='bg-white'>
            <AboutSection />
            <AboutInfo />
            <AboutContact />
            <Footer />
        </div>
    )
}

export default page