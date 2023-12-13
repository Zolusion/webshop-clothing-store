// pages/HijabFashion.js
import React from 'react';

const FashionTrendsPage = () => {
    const hijabTrends = [
        {
            title: 'Elegant Floral Hijab',
            image: '/fashiontrends-image/fashiontrend-image1.png',
        },
        {
            title: 'Casual Everyday Hijab',
            image: '/fashiontrends-image/fashiontrend-image2.jpeg',
        },
        {
            title: 'Bold Color Block Hijab',
            image: '/fashiontrends-image/fashiontrend-image3.jpeg',
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center container mx-auto max-w-7xl 2xl:max-w-[2200px]">
                <h1 className="text-4xl font-bold mb-4 text-black">Hijab Fashion Trends</h1>
                <p className="text-gray-600 mb-8">Discover the latest hijab fashion trends here.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hijabTrends.map((trend, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
                            <img
                                src={trend.image}
                                alt={`Fashion Trend ${index + 1}`}
                                className="w-full h-full object-cover mb-4 rounded-md"
                            />
                            <h2 className="text-xl font-semibold mb-2">{trend.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FashionTrendsPage;
