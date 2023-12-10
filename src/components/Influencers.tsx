import Image from "next/legacy/image"
import React from 'react'

const Influencers = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:col-span-6 sm:w-full w-[450px]">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Want to become the face of SolmazFashion?
                    </h2>
                    <p className="mt-3 text-lg text-gray-500 max-w-prose">
                        Are you passionate about our mission? Become an ambassador and make a difference in your community.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-6 gap-8">
                    {/* Image 1 */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="relative">
                            <Image
                                className="object-cover rounded-md"
                                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Fashion Image 1"
                                width={600}
                                height={600}
                            />
                            {/* Instagram */}
                            <span className='text-gray-400 font-bold'>@ysmn_</span>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="relative">
                            <Image
                                className="object-cover w-full rounded-md"
                                src="https://plus.unsplash.com/premium_photo-1683134271694-61df670ca1be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhpamFiJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Fashion Image 2"
                                width={600}
                                height={600}
                            />
                            <span className='text-gray-400 font-bold'>@bella_ashley</span>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="relative">
                            <Image
                                className="object-cover rounded-md"
                                src="https://images.unsplash.com/photo-1680970950875-fa09fd663717?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                                alt="Fashion Image 3"
                                width={600}
                                height={600}
                            />
                            <span className='text-gray-400 font-bold'>@jessicaaa</span>
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="relative">
                            <Image
                                className="object-cover rounded-md"
                                src="https://images.unsplash.com/photo-1669703431397-200424e481b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
                                alt="Fashion Image 4"
                                width={600}
                                height={600}
                            />
                            <span className='text-gray-400 font-bold'>@_kayla</span>
                        </div>
                    </div>

                    {/* Image 5 */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="relative">
                            <Image
                                className="object-cover rounded-md"
                                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGR1dGNoJTIwcGVvcGxlfGVufDB8fDB8fHww"
                                alt="Fashion Image 5"
                                width={600}
                                height={600}
                            />
                            <span className='text-gray-400 font-bold'>@342_amberry</span>
                        </div>
                    </div>

                    {/* Image 6 */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="relative">
                            <Image
                                className="object-cover rounded-lg"
                                src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxkdXRjaCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Fashion Image 6"
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

export default Influencers