import Image from "next/image"
import React from 'react'

const imagesData = [
    {
        src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        src: "/model1.jpeg",
    },
    {
        src: "/model6.jpeg",
    },
    {
        src: "/model3.jpeg",
    },
    {
        src: "/model4.jpeg",
    },
    {
        src: "/model5.jpeg",
    }
];


const Influencers = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl 2xl:max-w-[2200px] mx-auto grid grid-cols-1 gap-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:col-span-6 sm:w-full w-[450px]">
                    <h2 className="text-3xl 2xl:text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Want to become the face of SolmazFashion?
                    </h2>
                    <p className="mt-3 2xl:text-2xl text-lg text-gray-500 max-w-prose">
                        Are you passionate about our mission? Become an ambassador and make a difference in your community.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-6 gap-8">
                    {imagesData.map((image, index) => (
                        <div key={index} className="col-span-2 sm:col-span-1">
                            <div className="relative aspect-[4/5]">
                                <Image
                                    className="object-cover rounded-md"
                                    src={image.src}
                                    alt={`Fashion Image ${index + 1}`}
                                    fill={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Influencers