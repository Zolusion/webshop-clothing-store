import React from 'react';
import HelpCenterData from '@/content/HelpCenterData.json';

const HelpCenter = () => {
  return (
    <div className='bg-white container mx-auto 2xl:max-w-[2200px] px-6 py-16'>
      <h1 className="text-3xl font-bold mb-4 text-black 2xl:text-5xl">How can we help you?</h1>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <div className="container mx-auto mt-8 2xl:max-w-[2200px]">
        <div className="justify-center space-x-4 flex flex-col text-center bg-gray-200">
          {HelpCenterData.map((section) => (
            <div
              key={section.id}
              className="cursor-pointer border-b-2 border-transparent hover:border-blue-500"
            >
              <a href={`#${section.id}`} className="py-2 px-4 block text-black 2xl:text-2xl 2xl:font-bold 2xl:py-4">
                {section.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
