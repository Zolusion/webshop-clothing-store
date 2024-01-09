import Image from 'next/image';
import React from 'react';
import FashionTrendsData from '@/content/FashionTrendsData.json';

const FashionTrendsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-12 max-w-7xl 2xl:max-w-[1800px] px-6">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Discover the Latest Hijab Fashion Trends</h1>
                <p className="text-gray-600 text-center mb-8">Explore our curated collection of hijab styles for every occasion.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FashionTrendsData.map((trend, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-md mb-4 transition-transform transform hover:scale-105">
                            <Image
                                src={trend.image}
                                alt={`Fashion Trend ${index + 1}`}
                                className="object-cover mb-4 rounded-md w-full h-[600px]"
                                width={500}
                                height={500}
                                quality={100}
                            />
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{trend.title}</h2>
                            {trend.accessories && (
                                <div className="text-gray-600 mt-2 flex flex-col">
                                    {trend.accessories.map((accessory, accessoryIndex) => (
                                        <a key={accessoryIndex} href={accessory.src} className="text-gray-600 mt-2 underline">
                                            {accessory.name}
                                        </a>

                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FashionTrendsPage;