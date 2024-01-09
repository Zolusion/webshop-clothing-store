import Image from 'next/image';
import React from 'react';
import PolicyData from '@/content/PolicyData.json';

const PrivacyPolicy = () => {
  return (
    <div className='bg-white p-8 flex'>
      <div className='w-1/2 pr-8 text-black justify-center flex flex-col'>
        <h1 className='text-2xl font-bold mb-6'>Privacy Policy</h1>
        <p className='mb-4'>
          {PolicyData.PrivacyPolicy.content[0].text}
        </p>
        <hr className='mb-4' />
        <p className='mb-4'>
          <strong>Personal Information:</strong> {PolicyData.PrivacyPolicy.content[1].text}.
        </p>
        <p className='mb-4'>
          <strong>Data Security:</strong> {PolicyData.PrivacyPolicy.content[2].text}.
        </p>
        <p className='mb-4'>
          <strong>Third-Party Services:</strong> {PolicyData.PrivacyPolicy.content[3].text}.
        </p>
        <hr className='mb-4' />
        <p className='mb-4'>
          <strong>Cookies:</strong> {PolicyData.PrivacyPolicy.content[4].text}.
        </p>
        <p className='mb-4'>
          <strong>Marketing Communications:</strong> {PolicyData.PrivacyPolicy.content[5].text}.
        </p>
        <p className='mb-4'>
          <strong>Changes to Privacy Policy:</strong> {PolicyData.PrivacyPolicy.content[6].text}.
        </p>
        <hr className='mb-4' />
        <p className='mb-4'>
          {PolicyData.PrivacyPolicy.content[7].text}
        </p>
        <p className='mb-4'>
          <strong>Contact Us:</strong> {PolicyData.PrivacyPolicy.content[8].text}.
        </p>
      </div>
      <div className='w-1/2'>
        <Image
          src='https://images.unsplash.com/photo-1682685797795-5640f369a70a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='Privacy Policy'
          className='w-full h-auto object-cover 2xl:w-[1300px] 2xl:h-[800px]'
          width={500}
          height={500}
          quality={100}
          unoptimized
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;