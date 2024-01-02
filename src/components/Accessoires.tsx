"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    imageSrc: string;
    category: string;
}

const Accessoires = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const products: Product[] = [
        {
            id: 1,
            name: 'Elegant Pearl Necklace',
            description: 'Adorn yourself with the timeless elegance of the Elegant Pearl Necklace. A perfect accessory for any occasion.',
            brand: 'Luxury Pearls',
            price: 49.99,
            imageSrc: 'https://i.pinimg.com/474x/6f/be/5f/6fbe5fee7b3bbee6f481407e99423b8e.jpg',
            category: 'Necklaces',
        },
        {
            id: 2,
            name: 'Leather Wallet',
            description: 'Keep your essentials secure and stylish with the Leather Wallet featuring RFID protection. A must-have accessory.',
            brand: 'SecureStyle',
            price: 5.95,
            imageSrc: 'https://i.pinimg.com/474x/e5/da/69/e5da6995f8d9c2d10da1d15a447618f2.jpg',
            category: 'Wallets',
        },
        {
            id: 3,
            name: 'Classic Aviator Sunglasses',
            description: 'Complete your look with the Classic Aviator Sunglasses. A timeless accessory that adds a touch of sophistication.',
            brand: 'SunStyle',
            price: 7.99,
            imageSrc: 'https://i.pinimg.com/474x/82/4c/27/824c27b6f08d52354b6a47c66ed1d97c.jpg',
            category: 'Sunglasses',
        },
        {
            id: 4,
            name: 'Silk Scarf with Floral Print',
            description: 'Elevate your style with the Silk Scarf featuring a beautiful floral print. A versatile accessory for any season.',
            brand: 'SilkStyle',
            price: 9.99,
            imageSrc: 'https://i.pinimg.com/474x/e0/30/e1/e030e11addc75a665fc99462f26584ee.jpg',
            category: 'Scarf',
        },
        {
            id: 5,
            name: 'Stainless Steel Watch',
            description: 'Accessorize with the timeless appeal of the Stainless Steel Watch. A blend of style and functionality.',
            brand: 'Timeless Elegance',
            price: 39.95,
            imageSrc: 'https://i.pinimg.com/474x/35/d2/b9/35d2b9010058b399489c22d5ede39651.jpg',
            category: 'Watches',
        },
        {
            id: 6,
            name: 'Chic Leather Handbag',
            description: 'Carry your essentials in style with the Chic Leather Handbag. A fashionable accessory that complements any outfit.',
            brand: 'Fashion Forward',
            price: 9.99,
            imageSrc: 'https://i.pinimg.com/474x/9c/30/b7/9c30b7359e9d28d368d33bf143888120.jpg',
            category: 'Handbags',
        },
        {
            id: 7,
            name: 'Trendy Smartwatch',
            description: 'Stay connected and in vogue with the Trendy Smartwatch. An essential accessory for the tech-savvy.',
            brand: 'TechStyle',
            price: 29.99,
            imageSrc: 'https://i.pinimg.com/474x/6f/c8/21/6fc8215e6e3a3c9f832b97286adf3435.jpg',
            category: 'Watches',
        },
        {
            id: 8,
            name: 'Designer Cufflinks Set',
            description: 'Add a touch of sophistication to your attire with the Designer Cufflinks Set. A refined accessory for formal occasions.',
            brand: 'Dapper Designs',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/474x/46/3c/9b/463c9b72d09d2cbdd0e475aa37708fb1.jpg',
            category: 'Accessories',
        },
        {
            id: 9,
            name: 'Fashionable Hat with Bow',
            description: 'Top off your look with the Fashionable Hat featuring a stylish bow. An accessory that exudes charm and flair.',
            brand: 'Chic Headwear',
            price: 8.95,
            imageSrc: 'https://i.pinimg.com/474x/01/a9/d8/01a9d88319fea8d2f40e799d896f0753.jpg',
            category: 'Hats',
        },
        {
            id: 10,
            name: 'Leather Phone Wallet',
            description: 'Combine convenience and style with the Leather Phone Wallet. A practical accessory for the modern lifestyle.',
            brand: 'TechLux',
            price: 4.99,
            imageSrc: 'https://i.pinimg.com/474x/23/b9/2a/23b92ab3d6ee497ae058122ad3206663.jpg',
            category: 'Wallets',
        },
        {
            id: 11,
            name: '3pcs Star Charm Neclace',
            description: 'Elevate your look with the 3pcs Star Charm Neclace. A stunning accessory that adds a touch of glamour.',
            brand: 'SunStyle',
            price: 12.99,
            imageSrc: 'https://i.pinimg.com/474x/7d/7b/9e/7d7b9e52fad2a3f7926c04268d9b2307.jpg',
            category: 'Necklaces',
        }
    ];

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };

    const imagesMatchingNames = products.map(product => product.imageSrc);

    console.log(imagesMatchingNames);

    return (
        <div className='px-6 p-4 bg-gray-100 shadow-md'>
            <div className='flex flex-col md:flex-row w-full mb-4 justify-between'>
                <div className='mb-4 md:mb-0'>
                    <input
                        type='text'
                        placeholder='Search products'
                        className='p-2 border border-gray-300 text-black border-none bg-none rounded-md'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                        className='text-white hover:underline text-[14px] focus:outline-none ml-2 bg-blue-500 px-4 py-2 rounded-md'
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                <div className='flex flex-col md:flex-row font-bold md:justify-center md:items-center'>
                    <div className='md:hidden mb-2'>
                        <button
                            className='text-black hover:underline text-[14px] focus:outline-none'
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            Categories
                        </button>
                        {isMobileMenuOpen && (
                            <div className='flex flex-col mt-2'>
                                <a href='#' onClick={() => handleCategoryClick('Skincare')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Skincare' ? 'font-bold' : ''}`}>Skincare</a>
                                <a href='#' onClick={() => handleCategoryClick('Makeup')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Makeup' ? 'font-bold' : ''}`}>Makeup</a>
                                <a href='#' onClick={() => handleCategoryClick('Haircare')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Haircare' ? 'font-bold' : ''}`}>Haircare</a>
                                <a href='#' onClick={() => handleCategoryClick('Fragrances')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Fragrances' ? 'font-bold' : ''}`}>Fragrances</a>
                                <a href='#' onClick={() => handleCategoryClick('Personal Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Personal Care' ? 'font-bold' : ''}`}>Personal Care</a>
                                <a href='#' onClick={() => handleCategoryClick('Body Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Body Care' ? 'font-bold' : ''}`}>Body Care</a>
                                <a href='#' onClick={() => handleCategoryClick('Gifts')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Gifts' ? 'font-bold' : ''}`}>Gifts</a>
                                <a href='#' onClick={() => handleCategoryClick('Home Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Home Care' ? 'font-bold' : ''}`}>Home Care</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Skincare')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Skincare' ? 'font-bold' : ''}`}>Skincare</a>
                        <a href='#' onClick={() => handleCategoryClick('Makeup')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Makeup' ? 'font-bold' : ''}`}>Makeup</a>
                        <a href='#' onClick={() => handleCategoryClick('Haircare')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Haircare' ? 'font-bold' : ''}`}>Haircare</a>
                        <a href='#' onClick={() => handleCategoryClick('Fragrances')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Fragrances' ? 'font-bold' : ''}`}>Fragrances</a>
                        <a href='#' onClick={() => handleCategoryClick('Personal Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Personal Care' ? 'font-bold' : ''}`}>Personal Care</a>
                        <a href='#' onClick={() => handleCategoryClick('Body Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Body Care' ? 'font-bold' : ''}`}>Body Care</a>
                        <a href='#' onClick={() => handleCategoryClick('Gifts')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Gifts' ? 'font-bold' : ''}`}>Gifts</a>
                        <a href='#' onClick={() => handleCategoryClick('Home Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Home Care' ? 'font-bold' : ''}`}>Home Care</a>
                    </div>
                </div>
            </div>

            <hr className='mb-4' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-8'>
                {(searchQuery ? filteredProducts : products).map((product) => (
                    <div key={product.id} className={`mb-8 ${selectedCategory && product.category !== selectedCategory ? 'hidden' : ''} `}>
                        <Image
                            src={product.imageSrc}
                            alt={product.name}
                            className='w-full h-[500px] object-cover rounded-md mb-4 2xl:h-[900px]'
                            loading='lazy'
                            width={500}
                            height={500}
                        />

                        <div className='flex flex-col justify-between h-[200px]'>
                            <h3 className='text-[20px] text-black font-thin'>{product.name}</h3>
                            <p className='text-black font-bold mb-4'>{product.description}</p>
                            <div className='flex items-center'>
                                <p className='text-[18px] font-semibold text-black'>€{product.price}</p>
                                <div className='ml-4'>
                                    <button
                                        className='text-black hover:underline transition duration-300 mr-4'
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button className='bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 transition duration-300'>
                                        Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accessoires;
