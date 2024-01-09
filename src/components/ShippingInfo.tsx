import React from 'react';
import ShippingInfoData from '@/content/ShippingInfoData.json';

const ShippingInfo = () => {
  console.log(ShippingInfoData);
  return (
    <div className='bg-white p-8 text-black grid grid-cols-1 sm:grid-cols-2 gap-8'>
      <div className='flex flex-col justify-center text-black'>
        <h1 className='text-2xl font-bold mb-6'>Shipping Information</h1>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[0].text}
        </p>
        <ul className='list-disc pl-6 mb-4'>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[1].items?.[0]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[1].items?.[1]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[1].items?.[2]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[1].items?.[3]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[1].items?.[4]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[1].items?.[5]}</li>
        </ul>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>{ShippingInfoData.ShippingInfo.content[2].text}</h2>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[3].text}
        </p>
        <ul className='list-disc pl-6 mb-4'>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[4].items?.[0]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[4].items?.[1]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[4].items?.[2]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[4].items?.[3]}</li>
          <li className='mb-2'>{ShippingInfoData.ShippingInfo.content[4].items?.[4]}</li>
        </ul>
        <p>
          {ShippingInfoData.ShippingInfo.content[5].text}
        </p>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>{ShippingInfoData.ShippingInfo.content[6].text}</h2>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[7].text}
        </p>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[8].text}
        </p>
        <p>
          {ShippingInfoData.ShippingInfo.content[9].text}
        </p>
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>{ShippingInfoData.ShippingInfo.content[10].text}</h2>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[11].text}
        </p>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[12].text}
        </p>
        <p className='mb-4'>
          {ShippingInfoData.ShippingInfo.content[13].text}
        </p>
      </div>
    </div>
  );    
};

export default ShippingInfo