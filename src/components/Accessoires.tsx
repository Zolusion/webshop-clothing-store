"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        productName: 'Wanderlust',
        brand: 'Timeless Elegance',
        price: 24.95,
        imageUrl: '/accessoires/wanderlust-handbag.png',
        category: 'Handbags',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Stratosphere',
        brand: 'Timeless Elegance',
        price: 16.95,
        imageUrl: '/accessoires/stratosphere-watch.png',
        category: 'Watches',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Celestial Crimson Harmony',
        brand: 'Timeless Elegance',
        price: 89.95,
        imageUrl: '/accessoires/daimond-necklace.png',
        category: 'Necklaces',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Mirage',
        brand: 'Timeless Elegance',
        price: 11.95,
        imageUrl: '/accessoires/mirage-sunglasses.png',
        category: 'Sunglasses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Nebula',
        brand: 'Timeless Elegance',
        price: 24.95,
        imageUrl: '/accessoires/nebula-watch.png',
        category: 'Watches',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'CryptoGuard',
        brand: 'Timeless Elegance',
        price: 7.95,
        imageUrl: '/accessoires/cryptoguard-wallet.png',
        category: 'Wallets',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Radiant Retro',
        brand: 'Timeless Elegance',
        price: 24.95,
        imageUrl: '/accessoires/radiantretro-handbag.png',
        category: 'Handbags',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Suede Sansation',
        brand: 'Timeless Elegance',
        price: 9.95,
        imageUrl: '/accessoires/suede-sansation-handbag.png',
        category: 'Handbags',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Luminous Gemstone',
        brand: 'Timeless Elegance',
        price: 78.99,
        imageUrl: '/accessoires/ruby-golden-necklace.png',
        category: 'Necklaces',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'TitanKey',
        brand: 'Timeless Elegance',
        price: 9.95,
        imageUrl: '/accessoires/titankey-wallet.png',
        category: 'Wallets',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Boho Blossom',
        brand: 'Timeless Elegance',
        price: 24.95,
        imageUrl: '/accessoires/bohoblossom-handbag.png',
        category: 'Handbags',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Rain-kissed Gemstone',
        brand: 'Timeless Elegance',
        price: 69.95,
        imageUrl: '/accessoires/rain-kissed-gemstone-necklace.png',
        category: 'Necklaces',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Urban Sunset',
        brand: 'Timeless Elegance',
        price: 13.95,
        imageUrl: '/accessoires/urban-sun-sunglasses.png',
        category: 'Sunglasses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Safe Chipher',
        brand: 'Timeless Elegance',
        price: 8.95,
        imageUrl: '/accessoires/safechipher-wallet.png',
        category: 'Wallets',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Eclipse',
        brand: 'Timeless Elegance',
        price: 17.95,
        imageUrl: '/accessoires/eclipse-watch.png',
        category: 'Watches',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Solarflow',
        brand: 'Timeless Elegance',
        price: 9.95,
        imageUrl: '/accessoires/solarflow-sunglasses.png',
        category: 'Sunglasses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Azure Shades',
        brand: 'Ivory Elegance',
        price: 6.95,
        imageUrl: '/accessoires/azure-shades-sunglasses.png',
        category: 'Sunglasses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Infinity',
        brand: 'Ivory Elegance',
        price: 28.95,
        imageUrl: '/accessoires/infinity-watch.png',
        category: 'Watches',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'GlamRay',
        brand: 'Ivory Elegance',
        price: 6.95,
        imageUrl: '/accessoires/glamray-sunglasses.png',
        category: 'Sunglasses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'BioLock',
        brand: 'Ivory Elegance',
        price: 19.95,
        imageUrl: '/accessoires/biolock-wallet.png',
        category: 'Watches',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Zenith',
        brand: 'Ivory Elegance',
        price: 9.95,
        imageUrl: '/accessoires/zenith-watch.png',
        category: 'Sunglasses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        productName: 'Prestige',
        brand: 'Ivory Elegance',
        price: 12.95,
        imageUrl: '/accessoires/prestige-watch.png',
        category: 'Watches',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    }
];

const Accessoires = () => {

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
                                <a href='#' onClick={() => handleCategoryClick('Necklaces')} className={`text-white hover:underline text-[14px] ${selectedCategory === 'Necklaces' ? 'font-bold' : ''}`}>Necklaces</a>
                                <a href='#' onClick={() => handleCategoryClick('Wallets')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Wallets' ? 'font-bold' : ''}`}>Wallets</a>
                                <a href='#' onClick={() => handleCategoryClick('Sunglasses')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Sunglasses' ? 'font-bold' : ''}`}>Sunglasses</a>
                                <a href='#' onClick={() => handleCategoryClick('Watches')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Watches' ? 'font-bold' : ''}`}>Watches</a>
                                <a href='#' onClick={() => handleCategoryClick('Handbags')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Handbags' ? 'font-bold' : ''}`}>Handbags</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Necklaces')} className={` text-white hover:underline text-[14px] ${selectedCategory === 'Necklaces' ? 'font-bold' : ''}`}>Necklaces</a>
                        <a href='#' onClick={() => handleCategoryClick('Wallets')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Wallets' ? 'font-bold' : ''}`}>Wallets</a>
                        <a href='#' onClick={() => handleCategoryClick('Sunglasses')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Sunglasses' ? 'font-bold' : ''}`}>Sunglasses</a>
                        <a href='#' onClick={() => handleCategoryClick('Watches')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Watches' ? 'font-bold' : ''}`}>Watches</a>
                        <a href='#' onClick={() => handleCategoryClick('Handbags')} className={`mr-6 text-white hover:underline text-[14px] ${selectedCategory === 'Handbags' ? 'font-bold' : ''}`}>Handbags</a>
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

export default Accessoires;
