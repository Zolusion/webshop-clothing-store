import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import FooterData from '@/content/FooterData.json';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex justify-between px-6 py-12">
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

        {FooterData.map((section) => (
          <div key={section.title}>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white 2xl:text-md">{section.title}</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {section.links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <li className="mb-4 lg:mb-2">
                    <a href="#" className="hover:underline 2xl:text-md">{link.text}</a>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
