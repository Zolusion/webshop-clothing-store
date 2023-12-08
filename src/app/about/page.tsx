import React from 'react'
import AboutSection from '@/components/AboutSection';
import AboutInfo from '@/components/AboutInfo';
import AboutContact from '@/components/AboutContact';
import Footer from '@/components/Footer';
import type { Metadata } from "next";

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