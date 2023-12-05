import React from 'react'

const Newsletter = () => {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 justify-center items-center">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block text-white">Sign up for our newsletter</span>
                        <p className="mt-3 text-xl text-gray-500">Get the latest news and offers from us.</p>
                    </h2>
                    <div className="mt-8 flex">
                        <input type="email" placeholder="Enter your email address" className="w-full px-5 py-3 border border-gray-300 rounded-md text-black" />
                        <button className="ml-3 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600">Subscribe</button>
                    </div>
                </div>
                <div>
                    <video src="discount.mp4" autoPlay muted loop className="w-full h-auto rounded-md"></video>
                </div>
            </div>
        </div>

    )
}

export default Newsletter