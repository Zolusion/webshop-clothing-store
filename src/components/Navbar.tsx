"use client";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex justify-between items-center container mx-auto p-4">
            {/* Logo and Site Name */}
            <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            
            {/* Mobile Menu Toggle Button */}
            <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
            >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
            
            {/* Main Navigation */}
            <div id="mega-menu-full" className="hidden md:flex flex-grow items-center justify-center space-x-8 font-medium">
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a></li>
                <li>
                <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                    Categories{" "}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                </li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a></li>
                <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a></li>
            </ul>
            </div>
            {/* Cart and Wishlist Icons */}
            <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                </svg>
                </a>
            </div>
        </div>
  
        {/* Mega Menu Dropdown */}
        <div id="mega-menu-full-dropdown" className="hidden md:mt-1 md:border-t md:border-gray-200 md:shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul className="space-y-4">
                <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold text-black">Blazer</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you are already using.</span>
                </a>
                </li>
                <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold text-black">Bags</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you are already using.</span>
                </a>
                </li>
                <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold text-black">Jackets</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you are already using.</span>
                </a>
                </li>
            </ul>
            <ul className="space-y-4">
                <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold text-black">Heels</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you are already using.</span>
                </a>
                </li>
                <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold text-black">Accessoires</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you are already using.</span>
                </a>
                </li>
                <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold text-black">Dresses</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you are already using.</span>
                </a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

  );
};

export default Navbar;
