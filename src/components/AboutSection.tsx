"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from './Navbar';

const AboutSection = () => {
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!isMobileMenuVisible);
    };

    return (
        <div className='bg-white'>
            <Navbar />
            <div className="relative isolate px-6 lg:px-8 min-h-screen">
                <video className="absolute inset-0 object-cover w-full h-4/5 pointer-events-none mix-blend-multiply bg-opacity-50" src="/videos/aboutvideo.mp4" autoPlay muted loop style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}></video>
                <div className="absolute inset-x-0 z-10 transform-gpu overflow-hidden h-full flex flex-col justify-center" aria-hidden="true">
                    <div className="mx-auto max-w-3xl text-center lg:max-w-4xl 2xl:max-w-[1200px]">
                        <div className="text-center p-6">
                            <h1 className="font-bold tracking-tight text-white shadow-sm text-5xl 2xl:text-[60px]">
                                &quot;We believe that <span className='text-indigo-500'>Fashion</span> should be accessible to everyone.&quot;
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
