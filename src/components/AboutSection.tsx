"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const AboutSection = () => {
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!isMobileMenuVisible);
    };

    return (
        <div className='bg-white'>
            {/* Laptop Navbar */}
            <nav className="bg-gray-800 p-4 hidden lg:block">
                <div className="container mx-auto max-w-7xl 2xl:max-w-[2200px] flex justify-between items-center">
                    <div className="text-white font-bold text-xl 2xl:text-[21px]">
                        SolmazFashion
                    </div>
                    <div className="flex space-x-10">
                        <Link href="/" className="2xl:text-[21px] text-white hover:text-gray-300">Home</Link>
                        <Link href="/about" className="2xl:text-[21px] text-white hover:text-gray-300">About</Link>
                        <Link href="/contact" className="2xl:text-[21px] text-white hover:text-gray-300">Contact</Link>
                        <Link href="/ambassadors" className="2xl:text-[21px] text-white hover:text-gray-300">Ambassadors</Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <div className="lg:hidden">
                <nav className="bg-gray-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-white font-bold text-xl">
                            SolmazFashion
                        </div>
                        <button name='mobile' className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Sidebar */}
                <div className={`fixed inset-0 z-50 transition-transform transform ${isMobileMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="bg-gray-800 text-white p-4">
                        <button name='mobile' className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div>
                            <Link href="/" className="block py-2 px-4 text-white hover:bg-gray-600">Home</Link>
                            <Link href="/about" className="block py-2 px-4 text-white hover:bg-gray-600">About</Link>
                            <Link href="/contact" className="block py-2 px-4 text-white hover:bg-gray-600">Contact</Link>
                            <Link href="/ambassadors" className="block py-2 px-4 text-white hover:bg-gray-600">Ambassadors</Link>
                            <Link href="/new" className="block py-2 px-4 text-white hover:bg-gray-600">New</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative isolate px-6 lg:px-8 min-h-screen">
                <video className="absolute inset-0 object-cover w-full h-4/5 pointer-events-none mix-blend-multiply bg-opacity-50" src="hijabfashion.mp4" autoPlay muted loop style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}></video>
                <div className="absolute inset-x-0 z-10 transform-gpu overflow-hidden h-full flex flex-col justify-center" aria-hidden="true">
                    <div className="mx-auto max-w-3xl text-center lg:max-w-4xl 2xl:max-w-[1200px]">
                        <div className="text-center p-6">
                            <h1 className="font-bold tracking-tight text-white shadow-sm text-5xl 2xl:text-7xl">
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
