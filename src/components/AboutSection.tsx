import React from 'react'

const AboutSection = () => {
    return (
        <div className='bg-white'>
            <div className="relative isolate px-6 lg:px-8 min-h-screen">
                <video className="absolute inset-0 object-cover w-full h-4/5 pointer-events-none mix-blend-multiply bg-opacity-50" src="hijabfashion.mp4" autoPlay muted loop style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}></video>
                <div className="absolute inset-x-0 z-10 transform-gpu overflow-hidden h-full flex flex-col justify-center" aria-hidden="true">
                    <div className="mx-auto max-w-3xl">
                        <div className="text-center bg-black bg-opacity-40 rounded-md p-4">
                            <h1 className="font-bold tracking-tight text-white shadow-sm text-[30px] 2xl:text-4xl">
                                &quot;We believe that <span className='text-indigo-500'>Fashion</span> should be accessible to everyone. <span className='text-indigo-500'> Online shopping</span> should be easy, convenient, and accessible.&quot;
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection