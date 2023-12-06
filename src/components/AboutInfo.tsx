import Image from 'next/image'
import React from 'react'

const AboutInfo = () => {
  return (
    <div className='bg-white'>
        <div className="max-w-7xl mx-auto py-4 px-6 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-72 lg:h-full">
                    <Image
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About Image"
                        layout="fill"
                    />
                </div>

                <div className="lg:py-6">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>

                    <p className="mt-4 text-gray-500">
                        SolmazFashion is a team of passionate fashionistas who believe in the
                        power of community. We believe that fashion should be accessible to
                        everyone, and we are committed to making that a reality.
                    </p>

                    <p className="mt-4 text-gray-500">
                        We believe that fashion should be accessible to everyone. Online shopping
                        should be easy, convenient, and accessible. 
                    </p>

                    <p className="mt-4 text-gray-500">
                        Every day, we are inspired by the power of community. Our customers 
                        are our inspiration. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo