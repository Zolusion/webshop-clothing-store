"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from "next/image";

const Navbar = () => {
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!isMobileMenuVisible);
    };

    const handleCartToggle = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <nav className="bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex justify-between items-center container mx-auto p-4 max-w-7xl">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                        width={50}
                        height={50}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        placeholder="blur"
                        loading="lazy"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SolmazFashion</span>
                </a>

                <button className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleMobileMenu} aria-expanded={isMobileMenuVisible}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden md:flex flex-grow items-center justify-center space-x-8 font-medium">
                    <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                        <li><Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link></li>
                        <li><Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">About</Link></li>
                        <li><Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link></li>
                        <li><Link href="/ambassadors" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Ambassadors</Link></li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                        onClick={handleCartToggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </button>
                    <button
                        className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                        onClick={() => {
                            console.log('Wishlist clicked');
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`md:hidden fixed inset-0 z-50 transition-transform transform ${isMobileMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="bg-gray-800 text-white p-4">
                    <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div>
                        <Link href="/" className="block py-2 px-4 text-white hover:bg-gray-600">Home</Link>
                        <Link href="/about" className="block py-2 px-4 text-white hover:bg-gray-600">About</Link>
                        <Link href="/contact" className="block py-2 px-4 text-white hover:bg-gray-600">Contact</Link>
                        <Link href="/ambassadors" className="block py-2 px-4 text-white hover:bg-gray-600">Ambassadors</Link>
                        <Link href="/faq" className="block py-2 px-4 text-white hover:bg-gray-600">FAQ</Link>
                        <hr className="my-2" />
                        <Link href="/login" className="block py-2 px-4 text-white hover:bg-gray-600">Login</Link>
                        <Link href="/register" className="block py-2 px-4 text-white hover:bg-gray-600">Register</Link>
                    </div>
                </div>
            </div>

            {/* {isCartOpen && (
                <CartSidebar
                    isOpen={isCartOpen}
                    onClose={() => setCartOpen(false)}
                    onAddToCart={() => {
                        console.log('Added to cart');
                    }}
                />
            )} */}
        </nav>
    );
};

export default Navbar;
