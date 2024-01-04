import Image from 'next/image';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='bg-white p-8 flex'>
      <div className='w-1/2 pr-8 text-black justify-center flex flex-col'>
        <h1 className='text-2xl font-bold mb-6'>Privacy Policy</h1>
        <p className='mb-4'>
          At Solmaz Fashion, we value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard the information you provide to us.
        </p>
        <hr className='mb-4' />
        <p className='mb-4'>
          <strong>Personal Information:</strong> When you interact with our website or make a purchase, we may collect personal information such as your name, email address, phone number, address, and payment details. We use this information to process your orders, communicate with you, and provide a personalized shopping experience.
        </p>
        <p className='mb-4'>
          <strong>Data Security:</strong> We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. We use industry-standard security protocols to encrypt and safeguard your data.
        </p>
        <p className='mb-4'>
          <strong>Third-Party Services:</strong> We may use third-party services to process payments, deliver products, or analyze website traffic. These third parties have their own privacy policies and may collect information about you. We recommend reviewing their privacy policies before using their services.
        </p>
        <hr className='mb-4' />
        <p className='mb-4'>
          <strong>Cookies:</strong> Our website uses cookies to enhance your browsing experience and provide personalized content. You can disable cookies in your browser settings if you prefer not to have them stored on your device.
        </p>
        <p className='mb-4'>
          <strong>Marketing Communications:</strong> With your consent, we may send you promotional emails or newsletters. You can opt-out of these communications at any time by clicking the unsubscribe link in the email or contacting us directly.
        </p>
        <p className='mb-4'>
          <strong>Changes to Privacy Policy:</strong> We may update our privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review the policy periodically.
        </p>
        <hr className='mb-4' />
        <p className='mb-4'>
          By using our website or making a purchase, you agree to our terms of service and privacy policy. We do not sell or share your personal information with third parties.
        </p>
        <p className='mb-4'>
          <strong>Contact Us:</strong> If you have any questions or concerns about our privacy policy or how we handle your personal information, please contact us at privacy@solmazfashion.com.
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