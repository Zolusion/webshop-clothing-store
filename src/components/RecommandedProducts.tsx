import Image from 'next/image';
import React from 'react';

const productsData = [
    {
        id: 1,
        imageSrc: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        productName: 'Product 1',
        description: 'Description for Product 1',
    },
    {
        id: 2,
        imageSrc: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        productName: 'Product 2',
        description: 'Description for Product 2',
    },
    {
        id: 3,
        imageSrc: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        productName: 'Product 3',
        description: 'Description for Product 3',
    },
    {
        id: 4,
        imageSrc: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        productName: 'Product 4',
        description: 'Description for Product 4',
    }
];

const RecommandedProducts = () => {
    return (
        <div className='p-8 mt-[-50px]'>
            <div className="bg-white mt-4 p-8 rounded-md">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                    Recommended Products
                </h2>
                <div className="rounded-md mx-auto">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {productsData.map((product) => (
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
