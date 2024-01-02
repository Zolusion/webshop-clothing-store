import React from 'react';

const ShippingInfo = () => {
  return (
    <div className='bg-white p-8 text-black grid grid-cols-1 sm:grid-cols-2 gap-8'>
      <div className='flex flex-col justify-center text-black'>
        <h1 className='text-2xl font-bold mb-6'>Shipping Information</h1>
        <p className='mb-4'>
          At Solmaz Fashion, we strive to provide a seamless and efficient shipping experience for our customers. Here's some important information about our shipping policies:
        </p>
        <ul className='list-disc pl-6 mb-4'>
          <li className='mb-2'>We offer free shipping on all orders over $50.</li>
          <li className='mb-2'>Orders are typically processed and shipped within 1-2 business days.</li>
          <li className='mb-2'>We ship to most countries worldwide. However, please note that some restrictions may apply based on your location.</li>
          <li className='mb-2'>For domestic orders, delivery usually takes 3-5 business days. International delivery times vary depending on the destination.</li>
          <li className='mb-2'>You can track your order using the tracking number provided in the shipping confirmation email.</li>
          <li className='mb-2'>If you have any questions or concerns regarding your shipment, please contact our customer support team at support@solmazfashion.com.</li>
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Refund Policy</h2>
        <p className='mb-4'>
          We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we offer a hassle-free refund policy. Here are the key points to note:
        </p>
        <ul className='list-disc pl-6 mb-4'>
          <li className='mb-2'>You may request a refund within 30 days of receiving your order.</li>
          <li className='mb-2'>Items must be returned in their original condition, unworn and with tags attached.</li>
          <li className='mb-2'>Refunds will be processed within 5-7 business days after we receive the returned items.</li>
          <li className='mb-2'>Please note that shipping charges are non-refundable.</li>
          <li className='mb-2'>To initiate a refund, please contact our customer support team at support@solmazfashion.com.</li>
        </ul>
        <p>
          If you have any further questions or need assistance with returns or refunds, please don't hesitate to reach out to us.
        </p>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Track and Trace</h2>
        <p className='mb-4'>
          To track the status of your order, please use the track and trace feature on our website. Simply enter your tracking number provided in the shipping confirmation email to get real-time updates on the whereabouts of your package.
        </p>
        <p className='mb-4'>
          If you encounter any issues or have any questions regarding the track and trace feature, please contact our customer support team for assistance.
        </p>
        <p>
          Remember, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we offer a hassle-free refund policy.
        </p>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Cookies</h2>
        <p className='mb-4'>
          Our website uses cookies to enhance your browsing experience and provide personalized recommendations. By using our website, you consent to the use of cookies in accordance with our <a href='/privacy-policy' className='text-blue underline'>Privacy Policy</a>
        </p>
        <p className='mb-4'>
          If you prefer not to have cookies stored on your device, you can disable them in your browser settings.
        </p>
        <p className='mb-4'>
          If you have any further questions or need assistance with cookies, please don't hesitate to reach out to us.
        </p>
      </div>
    </div>
  );    
};

export default ShippingInfo