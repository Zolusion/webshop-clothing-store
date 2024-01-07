"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        productName: 'MAC Brush',
        price: 22.99,
        imageUrl: 'https://images.unsplash.com/photo-1637834700149-23d782334f8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Makeup',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Springy peeling gel',
        price: 14.95,
        imageUrl: 'https://images.unsplash.com/photo-1613638082033-4cc49feef601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvc21ldGljfGVufDB8fDB8fHww',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Nora Eczema',
        price: 8.99,
        imageUrl: 'https://images.unsplash.com/photo-1614858818552-326117cd36b0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Revitalizing Face Mask',
        price: 12.99,
        imageUrl: '/beauty/avocado-facemask.png',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Rose Infused Toner',
        price: 9.95,
        imageUrl: '/beauty/rose-infused-toner-skincare.png',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Lavender Bath Bombs',
        price: 7.99,
        imageUrl: '/beauty/lavender-bath-bombs-skincare.png',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Gold Infused Eye Cream',
        price: 18.99,
        imageUrl: '/beauty/gold-infused-eye-cream-skincare.png',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Coconut Milk Shampoo',
        price: 15.99,
        imageUrl: '/beauty/coconut-milk-shampoo-haircare.png',
        category: 'Haircare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Cherry Blossom Perfume',
        price: 24.99,
        imageUrl: '/beauty/cherry-blossom-parfume-fragrances.png',
        category: 'Fragrances',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Charcoal Detox Mask',
        price: 16.99,
        imageUrl: '/beauty/charcoal-detox-mask-skincare.png',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Argan Oil Hair Serum',
        price: 13.99,
        imageUrl: '/beauty/argan-oil-hair-serum-haircare.png',
        category: 'Haircare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Jasmine Scented Candle',
        price: 10.59,
        imageUrl: 'https://i.pinimg.com/474x/53/fb/b3/53fbb3c9ceaf6bd3856cfd4d6c9fe3db.jpg',
        category: 'Home Care',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Cerave Hydrating Cleanser',
        price: 10.59,
        imageUrl: '/beauty/cerave-hydrating-cleanser-skincare.png',
        category: 'Skincare',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
];

const BeautyComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const imagesMatchingNames = products.map(product => product.imageUrl);
    console.log(imagesMatchingNames);

    const handleAddToCart = (e: any, product: any) => {
        dispatch(addItem(product));
        e.preventDefault();
        router.push("/cart");
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = products.filter((product) =>
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
                {(searchQuery ? filteredProducts : products).map((product, index) => (
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
