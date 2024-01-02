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

const HeelsComponent = () => {

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
            name: 'Sleek Ankle Boots',
            description: 'Make a statement with the Sleek Ankle Boots. Crafted for both comfort and fashion, these boots are a must-have for any wardrobe.',
            brand: 'Fashion Forward',
            price: 99.99,
            imageSrc: 'https://i.pinimg.com/474x/e1/08/75/e10875d0adc85c5dca356356491c608f.jpg',
            category: 'Boots',
        },
        {
            id: 2,
            name: 'Quilted Sandals',
            description: 'Stay stylish and comfortable in the Quilted Sandals. Designed for both fashion and ease, these sandals are a versatile addition to your collection.',
            brand: 'WarmStyle',
            price: 49.95,
            imageSrc: 'https://i.pinimg.com/474x/e9/54/6b/e9546bfb205e224fa0d52c341c2f3997.jpg',
            category: 'Sandals',
        },
        {
            id: 3,
            name: 'Casual Sneakers',
            description: 'Complete your casual look with the Casual Sneakers. Timeless in style, these sneakers are a versatile addition to your wardrobe.',
            brand: 'DenimStyle',
            price: 29.99,
            imageSrc: 'https://i.pinimg.com/474x/4d/02/b7/4d02b76fbae476f67a65bcbd819ae62f.jpg',
            category: 'Sneakers',
        },
        {
            id: 4,
            name: 'Elegant Flats',
            description: 'Step out in style with the Elegant Flats featuring a chic design. Stay fashionable and comfortable with this essential footwear.',
            brand: 'WinterChic',
            price: 39.99,
            imageSrc: 'https://i.pinimg.com/474x/16/84/cd/1684cd4c414b2f20297f5818f3a41eaa.jpg',
            category: 'Flats',
        },
        {
            id: 5,
            name: 'Stylish Booties',
            description: 'Embrace a bold look with the Stylish Booties. These edgy shoes add a touch of rebellion to your style, perfect for a confident statement.',
            brand: 'RebelStyle',
            price: 59.95,
            imageSrc: 'https://i.pinimg.com/474x/72/fe/87/72fe87413f182182fb6f1fc567500046.jpg',
            category: 'Booties',
        },
        // Black velvet heels
        {
            id: 6,
            name: 'Black Velvet Heels',
            description: 'Stay in style with the Black Velvet Heels. Crafted with the highest quality fabric, these heels are a must-have for any wardrobe.',
            brand: 'RebelStyle',
            price: 59.95,
            imageSrc: 'https://img.freepik.com/free-photo/high-heels-black-velvet_53876-102771.jpg?w=1060&t=st=1703876989~exp=1703877589~hmac=615efc9f5faca35c6c34fa6b4699bdaa2a97c67c1c56668c65ba2798ae99edc0',
            category: 'Heels',
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
                                <a href='#' onClick={() => handleCategoryClick('Heels')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Heels' ? 'font-bold' : ''}`}>Heels</a>
                                <a href='#' onClick={() => handleCategoryClick('Boots')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Boots' ? 'font-bold' : ''}`}>Boots</a>
                                <a href='#' onClick={() => handleCategoryClick('Sandals')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Sandals' ? 'font-bold' : ''}`}>Sandals</a>
                                <a href='#' onClick={() => handleCategoryClick('Sneakers')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Sneakers' ? 'font-bold' : ''}`}>Sneakers</a>
                                <a href='#' onClick={() => handleCategoryClick('Flats')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Flats' ? 'font-bold' : ''}`}>Flats</a>
                                <a href='#' onClick={() => handleCategoryClick('Booties')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Booties' ? 'font-bold' : ''}`}>Booties</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Heels')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Heels' ? 'font-bold' : ''}`}>Heels</a>
                        <a href='#' onClick={() => handleCategoryClick('Boots')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Boots' ? 'font-bold' : ''}`}>Boots</a>
                        <a href='#' onClick={() => handleCategoryClick('Sandals')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Sandals' ? 'font-bold' : ''}`}>Sandals</a>
                        <a href='#' onClick={() => handleCategoryClick('Sneakers')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Sneakers' ? 'font-bold' : ''}`}>Sneakers</a>
                        <a href='#' onClick={() => handleCategoryClick('Flats')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Flats' ? 'font-bold' : ''}`}>Flats</a>
                        <a href='#' onClick={() => handleCategoryClick('Booties')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Booties' ? 'font-bold' : ''}`}>Booties</a>
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

export default HeelsComponent;
