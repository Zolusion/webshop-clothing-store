import React from 'react'
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import AboutInfo from '@/components/AboutInfo';
import Footer from '@/components/Footer';

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