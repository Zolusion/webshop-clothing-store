import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/contact", text: "Contact" },
      { href: "/ambassadors", text: "Ambassadors" },
    ],
  },
  {
    title: 'Help center',
    links: [
      { href: "/faq", text: "FAQ" },
      { href: "/help", text: "Help" },
      { href: "/contact", text: "Support" },
      { href: "/contact", text: "Privacy" },
    ],
  },
  {
    title: 'Service',
    links: [
      { href: "/terms", text: "Shipping info" },
      { href: "/terms", text: "Refunds" },
      { href: "/privacy", text: "Track & Trace" },
      { href: "/cookies", text: "Cookies" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl flex justify-between px-6 py-12 2xl:max-w-[2200px]">
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

        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white 2xl:text-xl">{section.title}</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {section.links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <li className="mb-4 lg:mb-2">
                    <a href="#" className="hover:underline 2xl:text-[21px]">{link.text}</a>
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
