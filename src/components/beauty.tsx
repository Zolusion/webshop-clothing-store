"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';
import Beauty from '../content/Beauty.json';

const BeautyComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState(Beauty);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const imagesMatchingNames = Beauty.map(product => product.imageUrl);
    console.log(imagesMatchingNames);

    const handleAddToCart = (e: any, product: any) => {
        dispatch(addItem(product));
        e.preventDefault();
        router.push("/cart");
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = Beauty.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = Beauty.filter((product) =>
            product.productName.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className='bg-black'>
            <div className='flex flex-col md:flex-row w-full justify-between px-6'>
                <div className='mb-4 md:mb-0 p-4'>
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

                <div className='flex flex-col md:flex-row font-bold md:justify-center md:items-center justify-center items-center'>
                    <div className='md:hidden mb-2'>
                        <button
                            className='text-black hover:underline text-[14px] focus:outline-none'
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            Categories
                        </button>
                        {isMobileMenuOpen && (
                            <div className='flex flex-col mt-2'>
                                <a href='#' onClick={() => handleCategoryClick('Skincare')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Skincare' ? 'font-bold' : ''}`}>Skincare</a>
                                <a href='#' onClick={() => handleCategoryClick('Makeup')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Makeup' ? 'font-bold' : ''}`}>Makeup</a>
                                <a href='#' onClick={() => handleCategoryClick('Haircare')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Haircare' ? 'font-bold' : ''}`}>Haircare</a>
                                <a href='#' onClick={() => handleCategoryClick('Fragrances')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Fragrances' ? 'font-bold' : ''}`}>Fragrances</a>
                                <a href='#' onClick={() => handleCategoryClick('Personal Care')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Personal Care' ? 'font-bold' : ''}`}>Personal Care</a>
                                <a href='#' onClick={() => handleCategoryClick('Body Care')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Body Care' ? 'font-bold' : ''}`}>Body Care</a>
                                <a href='#' onClick={() => handleCategoryClick('Gifts')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Gifts' ? 'font-bold' : ''}`}>Gifts</a>
                                <a href='#' onClick={() => handleCategoryClick('Home Care')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Home Care' ? 'font-bold' : ''}`}>Home Care</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Skincare')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Skincare' ? 'font-bold' : ''}`}>Skincare</a>
                        <a href='#' onClick={() => handleCategoryClick('Makeup')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Makeup' ? 'font-bold' : ''}`}>Makeup</a>
                        <a href='#' onClick={() => handleCategoryClick('Haircare')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Haircare' ? 'font-bold' : ''}`}>Haircare</a>
                        <a href='#' onClick={() => handleCategoryClick('Fragrances')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Fragrances' ? 'font-bold' : ''}`}>Fragrances</a>
                        <a href='#' onClick={() => handleCategoryClick('Personal Care')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Personal Care' ? 'font-bold' : ''}`}>Personal Care</a>
                        <a href='#' onClick={() => handleCategoryClick('Body Care')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Body Care' ? 'font-bold' : ''}`}>Body Care</a>
                        <a href='#' onClick={() => handleCategoryClick('Gifts')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Gifts' ? 'font-bold' : ''}`}>Gifts</a>
                        <a href='#' onClick={() => handleCategoryClick('Home Care')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Home Care' ? 'font-bold' : ''}`}>Home Care</a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4'>
                {(searchQuery ? filteredProducts : Beauty).map((product, index) => (
                    <div key={index} className={` ${selectedCategory && product.category !== selectedCategory ? 'hidden grid-cols-12 col-span-12 sm:col-span-6 md:col-span-4 relative' : ''} `}>
                        <div className='relative'>
                            <Image
                                src={product.imageUrl}
                                alt={`Product ${index + 1}`}
                                className='object-cover w-[500px] h-[700px] 2xl:h-[900px] 2xl:w-[1200px] object-center opacity-100 transition-opacity group-hover:opacity-75'
                                loading='lazy'
                                width={500}
                                height={500}
                            />

                            <div className='absolute inset-0 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                <div className='bg-black bg-opacity-75 p-4 text-white h-full'>
                                    <h3 className='text-[20px] font-thin'>{product.productName}</h3>
                                    <p className='font-semibold'>€{product.price}</p>
                                </div>

                                <div className='bg-black bg-opacity-75 p-4 flex items-center justify-between'>
                                    <a
                                        href={"/cart"}
                                        onClick={(e) => handleAddToCart(e, product)}
                                        className="text-white hover:underline transition duration-300"
                                    >
                                        {product.button.cart}
                                    </a>
                                    <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300'>
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

export default BeautyComponent;
