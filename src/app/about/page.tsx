import dynamic from 'next/dynamic';
import React from 'react'
import type { Metadata } from "next";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutInfo from '@/components/AboutInfo';

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