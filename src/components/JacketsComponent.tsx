"use client";
import Image from 'next/image';
import React, { useState } from 'react'; import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';
import JacketsData from '@/content/JacketsData.json'


const JacketsComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState(JacketsData);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const imagesMatchingNames = JacketsData.map(product => product.imageUrl);
    console.log(imagesMatchingNames);

    const handleAddToCart = (e: any, product: any) => {
        dispatch(addItem(product));
        e.preventDefault();
        router.push("/cart");
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = JacketsData.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = JacketsData.filter((product) =>
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
                                <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
                                <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                                <a href='#' onClick={() => handleCategoryClick('Trench Coats')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Trench Coats' ? 'font-bold' : ''}`}>Trench Coats</a>
                                <a href='#' onClick={() => handleCategoryClick('Denim')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                                <a href='#' onClick={() => handleCategoryClick('Office Jackets')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Office Jackets' ? 'font-bold' : ''}`}>Office Jackets</a>
                                <a href='#' onClick={() => handleCategoryClick('Leather Coats')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Leather Coats' ? 'font-bold' : ''}`}>Leather Coats</a>
                                <a href='#' onClick={() => handleCategoryClick('Winter Jackets')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Winter Jackets' ? 'font-bold' : ''}`}>Winter Jackets</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
                        <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                        <a href='#' onClick={() => handleCategoryClick('Trench Coats')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Trench Coats' ? 'font-bold' : ''}`}>Trench Coats</a>
                        <a href='#' onClick={() => handleCategoryClick('Denim')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                        <a href='#' onClick={() => handleCategoryClick('Office Jackets')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Office Jackets' ? 'font-bold' : ''}`}>Office Jackets</a>
                        <a href='#' onClick={() => handleCategoryClick('Leather Coats')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Leather Coats' ? 'font-bold' : ''}`}>Leather Coats</a>
                        <a href='#' onClick={() => handleCategoryClick('Winter Jackets')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Winter Jackets' ? 'font-bold' : ''}`}>Winter Jackets</a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-4'>
                {(searchQuery ? filteredProducts : JacketsData).map((product, index) => (
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

export default JacketsComponent;
