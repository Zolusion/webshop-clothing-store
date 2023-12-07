import Image from 'next/image'
import React from 'react'

const AmbassadorInfo = () => {
    return (
        <div className='bg-white'>
            <div className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-8">
                        Become an Ambassador
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                className="w-full h-48 object-cover rounded-t-md"
                                src="https://plus.unsplash.com/premium_photo-1680012591126-13bd72f465b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVufGVufDB8fDB8fHww"
                                alt="Become an Ambassador"
                                width={600}
                                height={600}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
                                <p className="text-gray-400">
                                    Are you passionate about our mission? Become an ambassador and
                                    make a difference in your community.
                                </p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block px-6 py-3 text-sm font-semibold leading-none bg-white text-gray-900 rounded-full hover:bg-gray-100"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                className="w-full h-48 object-cover rounded-t-md"
                                src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Become an Ambassador"
                                width={600}
                                height={600}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">How to become an Ambassador</h3>
                                <p className="text-gray-400">
                                    Become an ambassador and join our team.
                                    Did you know that you can earn a commission?
                                </p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block px-6 py-3 text-sm font-semibold leading-none bg-white text-gray-900 rounded-full hover:bg-gray-100"
                                >
                                    More info
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                className="w-full h-48 object-cover rounded-t-md"
                                src="https://images.unsplash.com/photo-1664575599730-0814817939de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                                alt="Become an Ambassador"
                                width={600}
                                height={600}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">What to do as an Ambassador</h3>
                                <p className="text-gray-400">
                                    Achieving our goals is not easy.
                                    As an ambassador, you will be responsible for
                                    making a difference in the lives of others.
                                </p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block px-6 py-3 text-sm font-semibold leading-none bg-white text-gray-900 rounded-full hover:bg-gray-100"
                                >
                                    More info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Want to become the face of SolmazFashion?
                        </h2>
                        <p className="mt-3 text-lg text-gray-500 max-w-prose">
                            Are you passionate about our mission? Become an ambassador and
                            make a difference in your community.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                        <Image
                            className="w-full h-48 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Fashion Image 1"
                            width={600}
                            height={600}
                        />
                        {/* Instagram */}
                        <span className='text-gray-400 font-bold'>@ysmn_</span>
                        </div>
                        <div>
                        <Image
                            className="w-full h-48 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1523264766116-1e09b3145b84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdvbWFufGVufDB8fDB8fHww"
                            alt="Fashion Image 2"
                            width={600}
                            height={600}
                        />
                        <span className='text-gray-400 font-bold'>@bella_ashley</span>
                        </div>
                        <div>
                        <Image
                            className="w-full h-48 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvbWFufGVufDB8fDB8fHww"
                            alt="Fashion Image 3"
                            width={600}
                            height={600}
                        />
                        <span className='text-gray-400 font-bold'>@jessicaaa</span>
                        </div>
                        <div>
                        <Image
                            className="w-full h-48 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdvbWFufGVufDB8fDB8fHww"
                            alt="Fashion Image 3"
                            width={600}
                            height={600}
                        />
                        <span className='text-gray-400 font-bold'>@_kayla</span>
                        </div>
                        <div>
                        <Image
                            className="w-full h-48 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1618655108396-ce1ba6c80b7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG11c2xpbSUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                            alt="Fashion Image 3"
                            width={600}
                            height={600}
                        />
                        <span className='text-gray-400 font-bold'>@342_amberry</span>
                        </div>
                        <div>
                        <Image
                            className="w-full h-48 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1550546094-9835463f9f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2xpbSUyMHdvbWVufGVufDB8fDB8fHww"
                            alt="Fashion Image 3"
                            width={600}
                            height={600}
                        />
                        <span className='text-gray-400 font-bold'>@biancavalorine</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AmbassadorInfo