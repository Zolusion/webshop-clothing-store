import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
    return (
        <div className='bg-white'>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto max-w-7xl flex justify-between px-4">
                    <div className="text-white font-bold text-xl">
                        SolmazFashion
                    </div>
                    <div className="space-x-4">
                        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                        <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
                        <Link href="/ambassadors" className="text-white hover:text-gray-300">Ambassadors</Link>
                        <Link href="/new" className="text-white hover:text-gray-300">New</Link>
                    </div>
                </div>
            </nav>

            <div className="relative isolate px-6 lg:px-8 min-h-screen">
                <video className="absolute inset-0 object-cover w-full h-4/5 pointer-events-none mix-blend-multiply bg-opacity-50" src="hijabfashion.mp4" autoPlay muted loop style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}></video>
                <div className="absolute inset-x-0 z-10 transform-gpu overflow-hidden h-full flex flex-col justify-center" aria-hidden="true">
                    <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
                        <div className="text-center p-6">
                            <h1 className="font-bold tracking-tight text-white shadow-sm text-5xl">
                                &quot;We believe that <span className='text-indigo-500'>Fashion</span> should be accessible to everyone.&quot;
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSection