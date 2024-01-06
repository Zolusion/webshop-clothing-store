"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        id: 1,
        productName: 'Elegant Evening Gown',
        brand: 'Fashionista',
        price: 149.99,
        imageUrl: '/dresses/dress1.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 2,
        productName: 'Frosty Horizon ',
        brand: 'TrendyStyles',
        price: 89.95,
        imageUrl: '/dresses/mididress5.png',
        category: 'Evening Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 3,
        productName: 'Royal Blue Elegance',
        brand: 'Glamour Couture',
        price: 179.99,
        imageUrl: '/dresses/mididress7.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 4,
        productName: 'Sapphire Dreams',
        brand: 'Chic Elegance',
        price: 129.95,
        imageUrl: '/dresses/mididress8.png',
        category: 'Evening Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 5,
        productName: 'Blush Bloom Midi',
        brand: 'Petite Chic',
        price: 69.99,
        imageUrl: '/dresses/mididress9.png',
        category: 'Midi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 6,
        productName: 'Polka Dot Delight',
        brand: 'Fashion Fusion',
        price: 79.95,
        imageUrl: '/dresses/mididress10.png',
        category: 'Midi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 7,
        productName: 'Sunset Serenity Maxi',
        brand: 'Sunset Styles',
        price: 109.99,
        imageUrl: '/dresses/maxidress1.png',
        category: 'Maxi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 8,
        productName: 'Bohemian Rhapsody',
        brand: 'Boho Bliss',
        price: 94.95,
        imageUrl: '/dresses/maxidress2.png',
        category: 'Maxi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 9,
        productName: 'Weekend Comfort',
        brand: 'Casual Comforts',
        price: 49.99,
        imageUrl: '/dresses/casual1.png',
        category: 'Casual',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 10,
        productName: 'Denim Delight',
        brand: 'Urban Chic',
        price: 59.95,
        imageUrl: '/dresses/casual2.png',
        category: 'Casual',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 11,
        productName: 'Golden Horizon ',
        brand: 'TrendyStyles',
        price: 89.95,
        imageUrl: '/dresses/dress2.png',
        category: 'Evening Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 12,
        productName: 'Cinderellas Dream',
        brand: 'Fairytale Fashions',
        price: 249.99,
        imageUrl: '/dresses/gown1.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },

    {
        id: 13,
        productName: 'Midnight Masquerade',
        brand: 'Mystique Couture',
        price: 199.95,
        imageUrl: '/dresses/gown2.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 14,
        productName: 'Retro Glamour',
        brand: 'Timeless Trends',
        price: 89.99,
        imageUrl: '/dresses/vintage1.png',
        category: 'Vintage',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },

    {
        id: 15,
        productName: 'Classic Elegance',
        brand: 'Eternal Style',
        price: 79.95,
        imageUrl: '/dresses/vintage2.png',
        category: 'Vintage',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 16,
        productName: 'Chic Wrap Fusion',
        brand: 'Wrap It Up',
        price: 59.99,
        imageUrl: '/dresses/wrap1.png',
        category: 'Wrap Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 17,
        productName: 'Floral Wrap Fantasy',
        brand: 'Floral Bliss',
        price: 69.95,
        imageUrl: '/dresses/wrap2.png',
        category: 'Wrap Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 18,
        productName: 'Sunny Day Delight',
        brand: 'Sunshine Styles',
        price: 39.99,
        imageUrl: '/dresses/sunnyday-delight.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 19,
        productName: 'Tropical Breeze',
        brand: 'Tropical Trends',
        price: 49.95,
        imageUrl: '/dresses/tropical-breeze.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 20,
        productName: 'Timeless Black Elegance',
        brand: 'Elegance Defined',
        price: 79.99,
        imageUrl: '/dresses/timeless-black-elegance.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 21,
        productName: 'Ivory Sophistication',
        brand: 'Ivory Elegance',
        price: 69.95,
        imageUrl: '/dresses/ivory-sophistication.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 22,
        productName: 'Sunshine Serenity',
        brand: 'Classic Style',
        price: 59.99,
        imageUrl: '/dresses/sunshine-serenity.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 23,
        productName: 'Vintage Charm',
        brand: 'Classic Style',
        price: 79.99,
        imageUrl: '/dresses/vintage-charm.png',
        category: 'Classic',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    }
];

const DressesComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddToCart = (e: any, product: any) => {
        dispatch(addItem(product));
        e.preventDefault();
        router.push("/cart");
    };

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const imagesMatchingNames = products.map(product => product.imageUrl);
    console.log(imagesMatchingNames);

    return (
        <div className='bg-white'>
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
                                <a href='#' onClick={() => handleCategoryClick('Evening Dresses')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Evening Dresses' ? 'font-bold' : ''}`}>Evening Dresses</a>
                                <a href='#' onClick={() => handleCategoryClick('Midi')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Midi' ? 'font-bold' : ''}`}>Midi</a>
                                <a href='#' onClick={() => handleCategoryClick('Maxi')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Maxi' ? 'font-bold' : ''}`}>Maxi</a>
                                <a href='#' onClick={() => handleCategoryClick('Casual')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Casual' ? 'font-bold' : ''}`}>Casual</a>
                                <a href='#' onClick={() => handleCategoryClick('Ball Gowns')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Ball Gowns' ? 'font-bold' : ''}`}>Ball Gowns</a>
                                <a href='#' onClick={() => handleCategoryClick('Vintage')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Vintage' ? 'font-bold' : ''}`}>Vintage</a>
                                <a href='#' onClick={() => handleCategoryClick('Wrap Dresses')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Wrap Dresses' ? 'font-bold' : ''}`}>Wrap Dresses</a>
                                <a href='#' onClick={() => handleCategoryClick('Summer Dresses')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Summer Dresses' ? 'font-bold' : ''}`}>Summer Dresses</a>
                                <a href='#' onClick={() => handleCategoryClick('Classic')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Classic' ? 'font-bold' : ''}`}>Classic</a>

                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Evening Dresses')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Evening Dresses' ? 'font-bold' : ''}`}>Evening Dresses</a>
                        <a href='#' onClick={() => handleCategoryClick('Midi')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Midi' ? 'font-bold' : ''}`}>Midi</a>
                        <a href='#' onClick={() => handleCategoryClick('Maxi')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Maxi' ? 'font-bold' : ''}`}>Maxi</a>
                        <a href='#' onClick={() => handleCategoryClick('Casual')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Casual' ? 'font-bold' : ''}`}>Casual</a>
                        <a href='#' onClick={() => handleCategoryClick('Ball Gowns')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Ball Gowns' ? 'font-bold' : ''}`}>Ball Gowns</a>
                        <a href='#' onClick={() => handleCategoryClick('Vintage')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Vintage' ? 'font-bold' : ''}`}>Vintage</a>
                        <a href='#' onClick={() => handleCategoryClick('Wrap Dresses')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Wrap Dresses' ? 'font-bold' : ''}`}>Wrap Dresses</a>
                        <a href='#' onClick={() => handleCategoryClick('Summer Dresses')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Summer Dresses' ? 'font-bold' : ''}`}>Summer Dresses</a>
                        <a href='#' onClick={() => handleCategoryClick('Classic')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Classic' ? 'font-bold' : ''}`}>Classic</a>
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

export default DressesComponent;
