import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl flex justify-between px-6 py-12">
        <div>
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="Flowbite Logo"/>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <Link href="/about"><li className="mb-4"><a href="#" className="hover:underline">About</a></li></Link>
                <Link href="/contact"><li className="mb-4"><a href="#" className="hover:underline">Contact</a></li></Link>
                <Link href="/ambassadors"><li className="mb-4"><a href="#" className="hover:underline">Ambassadors</a></li></Link>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <Link href="/faq"><li className="mb-4"><a href="#" className="hover:underline">FAQ</a></li></Link>
              <Link href="/contact"><li className="mb-4"><a href="#" className="hover:underline">Help</a></li></Link>
              <Link href="/contact"><li className="mb-4"><a href="#" className="hover:underline">Support</a></li></Link>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <Link href="/terms"><li className="mb-4"><a href="#" className="hover:underline">Terms</a></li></Link>
              <Link href="/privacy"><li className="mb-4"><a href="#" className="hover:underline">Privacy</a></li></Link>
              <Link href="/cookies"><li className="mb-4"><a href="#" className="hover:underline">Cookies</a></li></Link>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer