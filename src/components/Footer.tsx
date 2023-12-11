import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl flex justify-between px-6 py-12 lg:max-w-[2200px]">
        <div>
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              width={50}
              height={50}
              quality={100}
              unoptimized
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              placeholder="blur"
              loading="lazy"
            />
          </a>

        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white lg:text-xl">Company</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <Link href="/"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Home</a></li></Link>
            <Link href="/about"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">About</a></li></Link>
            <Link href="/contact"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Contact</a></li></Link>
            <Link href="/ambassadors"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Ambassadors</a></li></Link>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white lg:text-xl">Help center</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <Link href="/faq"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">FAQ</a></li></Link>
            <Link href="/help"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Help</a></li></Link>
            <Link href="/contact"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Support</a></li></Link>
            <Link href="/contact"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Privacy</a></li></Link>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white lg:text-xl">Service</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <Link href="/terms"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Shipping info</a></li></Link>
            <Link href="/terms"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Refunds</a></li></Link>
            <Link href="/privacy"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Track & Trace</a></li></Link>
            <Link href="/cookies"><li className="mb-4 lg:mb-2"><a href="#" className="hover:underline lg:text-[21px]">Cookies</a></li></Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer