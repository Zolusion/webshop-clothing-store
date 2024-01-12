"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import Dresses from '@/content/Dresses.json';
import { addItem as addToCart, addToWishlist } from "@/store/cart/cartSlice";

const DressesComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState(Dresses);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const imagesMatchingNames = Dresses.map((product: any) => product.imageUrl);
    console.log(imagesMatchingNames);

    const handleAddToCart = (e: any, product: any) => {
        dispatch(addToCart(product));
        e.preventDefault();
        router.push("/cart");
      };
    
      const handleAddToWishlist = (e: any, product: any) => {
        dispatch(addToWishlist(product));
        e.preventDefault();
        router.push("/wishlist");
      }

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = Dresses.filter((product: any) => product.category === category);
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = Dresses.filter((product: any) =>
            product.productName.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
                                <a href='#' onClick={() => handleCategoryClick('Jeans')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Jeans' ? 'font-bold' : ''}`}>Jeans</a>
                                <a href='#' onClick={() => handleCategoryClick('Casual')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Casual' ? 'font-bold' : ''}`}>Casual</a>
                                <a href='#' onClick={() => handleCategoryClick('Denim')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                                <a href='#' onClick={() => handleCategoryClick('Ball Gowns')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Ball Gowns' ? 'font-bold' : ''}`}>Ball Gowns</a>
                                <a href='#' onClick={() => handleCategoryClick('Vintage')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Vintage' ? 'font-bold' : ''}`}>Vintage</a>
                                <a href='#' onClick={() => handleCategoryClick('Dresses')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Dresses' ? 'font-bold' : ''}`}>Dresses</a>
                                <a href='#' onClick={() => handleCategoryClick('Blouse')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Blouse' ? 'font-bold' : ''}`}>Blouse</a>
                                <a href='#' onClick={() => handleCategoryClick('Jackets')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Jackets' ? 'font-bold' : ''}`}>Jackets</a>
                                <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                                <a href='#' onClick={() => handleCategoryClick('Shoes')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Shoes' ? 'font-bold' : ''}`}>Shoes</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Jeans')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Jeans' ? 'font-bold' : ''}`}>Jeans</a>
                        <a href='#' onClick={() => handleCategoryClick('Casual')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Casual' ? 'font-bold' : ''}`}>Casual</a>
                        <a href='#' onClick={() => handleCategoryClick('Denim')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                        <a href='#' onClick={() => handleCategoryClick('Ball Gowns')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Ball Gowns' ? 'font-bold' : ''}`}>Ball Gowns</a>
                        <a href='#' onClick={() => handleCategoryClick('Vintage')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Vintage' ? 'font-bold' : ''}`}>Vintage</a>
                        <a href='#' onClick={() => handleCategoryClick('Dresses')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Dresses' ? 'font-bold' : ''}`}>Dresses</a>
                        <a href='#' onClick={() => handleCategoryClick('Blouse')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Blouse' ? 'font-bold' : ''}`}>Blouse</a>
                        <a href='#' onClick={() => handleCategoryClick('Jackets')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Jackets' ? 'font-bold' : ''}`}>Jackets</a>
                        <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                        <a href='#' onClick={() => handleCategoryClick('Shoes')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Shoes' ? 'font-bold' : ''}`}>Shoes</a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4'>
                {currentProducts.map((product: any, index: any) => (
                    <div key={index} className={` ${selectedCategory && product.category !== selectedCategory ? 'hidden grid-cols-12 col-span-12 sm:col-span-6 md:col-span-4 relative' : ''} `}>
                        <div className='relative'>
                            <Image
                                src={product.imageUrl}
                                alt={`Product ${index + 1}`}
                                className='object-cover w-[500px] h-[800px] 2xl:h-[1200px] 2xl:w-[1200px] object-center opacity-100 transition-opacity group-hover:opacity-75'
                                loading='lazy'
                                width={800}
                                height={800}
                                quality={100}
                                unoptimized
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
                                    <a  
                                        href={"/wishlist"}
                                        onClick={(e) => handleAddToWishlist(e, product)}
                                        className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 '
                                    >
                                        {product.button.wishlist}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DressesComponent;