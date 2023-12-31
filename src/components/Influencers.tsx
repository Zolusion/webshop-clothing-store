"use client"

import Image from "next/image"
import React from 'react'
import { useState } from 'react';
import InfluencerData from '@/content/InfluencerData.json';

interface ImageData {
    src: string;
    hoverSrc: string;
}

const Influencers: React.FC = () => {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    return (
        <div className="bg-white">
            <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto grid grid-cols-1 gap-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:col-span-6 sm:w-full w-[450px]">
                    <h2 className="text-3xl 2xl:text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Want to become the face of our Fashion brand?
                    </h2>
                    <p className="mt-3 2xl:text-lg text-lg text-gray-500 max-w-prose">
                        Are you passionate about our mission? Become an ambassador and make a difference in your community.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-6 gap-8">
                    {InfluencerData.map((image, index) => (
                        <div
                            key={index}
                            className="col-span-2 sm:col-span-1"
                            onMouseEnter={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div className="relative aspect-[4/5]">
                                <Image
                                    className="object-cover rounded-md"
                                    src={hoveredImage === index ? image.hoverSrc : image.src}
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