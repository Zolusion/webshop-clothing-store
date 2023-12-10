import React from 'react'

const HelpCenter = () => {
  return (
    <div className='bg-white container mx-auto px-6 py-16'>
      <h1 className="text-3xl font-bold mb-4 text-black">How can we help you?</h1>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <div className="container mx-auto mt-8">
        <div className="justify-center space-x-4 flex flex-col text-center bg-gray-200">
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">Track & Trace</a>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">Refunds</a>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">Shipping</a>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">Payment</a>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">Account Settings</a>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">To register and password </a>
          </div>
          <div className="cursor-pointer border-b-2 border-transparent hover:border-blue-500">
            <a href="#tab1" className="py-2 px-4 block text-black">Privacy and security</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter