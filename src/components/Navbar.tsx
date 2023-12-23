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
        <nav className="bg-black text-white">
            <div className="flex p-4 px-6 justify-between">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-lg font-semibold whitespace-nowrap">SolmazFashion</span>
                </a>
                <button className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleMobileMenu} aria-expanded={isMobileMenuVisible}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden md:flex flex-grow items-center justify-center space-x-8 font-medium">
                    <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                        <ol><Link href="/" className="block py-2 px-3 text-gray-300 hover:text-white">Clothing</Link></ol>
                        <ol><Link href="/about" className="block py-2 px-3 text-gray-300 hover:text-white">Beauty</Link></ol>
                        <ol><Link href="/contact" className="block py-2 px-3 text-gray-300 hover:text-white">Accessoires</Link></ol>
                        <ol><Link href="/ambassadors" className="block py-2 px-3 text-gray-300 hover:text-white">Jackets</Link></ol>
                        <ol><Link href="/" className="block py-2 px-3 text-gray-300 hover:text-white">Heels</Link></ol>
                        <ol><Link href="/about" className="block py-2 px-3 text-gray-300 hover:text-white">Dresses</Link></ol>
                        <ol><Link href="/contact" className="block py-2 px-3 text-gray-300 hover:text-white">Handbags</Link></ol>
                        <ol><Link href="/ambassadors" className="block py-2 px-3 text-gray-300 hover:text-white font-bold">SALE</Link></ol>
                    </ul>
                </div>
                <div className="flex items-center space-x-2">
                    <a href='/cart'>
                        <button
                            className="text-gray-300 hover:text-white"
                            onClick={handleCartToggle}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 w-6 h-5" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 1 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 1 1 0-2" />
                            </svg>
                        </button>
                    </a>
                    <button
                        className="text-gray-300 hover:text-white"
                        onClick={() => {
                            console.log('Wishlist clicked');
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill w-6 h-5" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden fixed inset-0 z-50 transition-transform transform ${isMobileMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="bg-black text-white p-4">
                    <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div>
                        <Link href="/" className="block py-2 px-4 text-gray-300 hover:text-white">Home</Link>
                        <Link href="/about" className="block py-2 px-4 text-gray-300 hover:text-white">About</Link>
                        <Link href="/contact" className="block py-2 px-4 text-gray-300 hover:text-white">Contact</Link>
                        <Link href="/ambassadors" className="block py-2 px-4 text-gray-300 hover:text-white">Ambassadors</Link>
                        <Link href="/faq" className="block py-2 px-4 text-gray-300 hover:text-white">FAQ</Link>
                        <hr className="my-2 border-gray-500" />
                        <Link href="/login" className="block py-2 px-4 text-gray-300 hover:text-white">Login</Link>
                        <Link href="/register" className="block py-2 px-4 text-gray-300 hover:text-white">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
