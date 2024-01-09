import Image from 'next/image';
import React from 'react';
import RecommandedProductsData from '@/content/RecommandedProductsData.json';

const RecommandedProducts = () => {
    return (
        <div className='p-8 mt-[-50px]'>
            <div className="bg-white mt-4 p-8 rounded-md">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                    Recommended Products
                </h2>
                <div className="rounded-md mx-auto">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {RecommandedProductsData.productsData.map((product) => (
                            <div key={product.id}>
                                <div className="relative h-64 2xl:h-[600px]">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={product.imageSrc}
                                        alt={`Product Image - ${product.productName}`}
                                        fill
                                    />
                                </div>
                                <div className='mt-4'>
                                    <h3 className="text-lg font-semibold text-black">
                                        {product.productName}
                                    </h3>
                                    <p className="text-gray-500">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommandedProducts;
