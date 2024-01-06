"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        id: 1,
        productName: 'Aqua Mist',
        brand: 'Fashion Forward',
        price: 39.99,
        imageUrl: '/shoes/aqua-mist-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 2,
        productName: 'Brown Caramel',
        brand: 'WarmStyle',
        price: 24.95,
        imageUrl: '/shoes/brown-caramel-booties.png',
        category: 'booties',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 3,
        productName: 'Cappuchino Dream',
        brand: 'DenimStyle',
        price: 29.99,
        imageUrl: '/shoes/cappuchino-dream-heels.png',
        category: 'Sneakers',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 4,
        productName: 'Caramel Charm',
        brand: 'WinterChic',
        price: 39.99,
        imageUrl: '/shoes/caramel-charm-ankle-boots.png',
        category: 'Boots',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 5,
        productName: 'Stylish Booties',
        brand: 'RebelStyle',
        price: 59.95,
        imageUrl: 'https://i.pinimg.com/474x/72/fe/87/72fe87413f182182fb6f1fc567500046.jpg',
        category: 'Booties',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 6,
        productName: 'Cotton Candy',
        brand: 'RebelStyle',
        price: 59.95,
        imageUrl: '/shoes/cotton-candy-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 7,
        productName: 'Dark Green Velvet',
        brand: 'RebelStyle',
        price: 39.95,
        imageUrl: '/shoes/dark-green-velvet-booties.png',
        category: 'Booties',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 8,
        productName: 'Disco Mirage',
        brand: 'RebelStyle',
        price: 24.95,
        imageUrl: '/shoes/disco-mirage-booties.png',
        category: 'Booties',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 9,
        productName: 'Echanting Cinderella',
        brand: 'RebelStyle',
        price: 54.99,
        imageUrl: '/shoes/enchanting-cinderella-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 10,
        productName: 'Glimmering Gala Heels',
        brand: 'RebelStyle',
        price: 79.95,
        imageUrl: '/shoes/glimmering-gala-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 11,
        productName: 'Golden Goddess',
        brand: 'RebelStyle',
        price: 69.95,
        imageUrl: '/shoes/golden-goddess-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 12,
        productName: 'Jet Black Boots',
        brand: 'RebelStyle',
        price: 25.95,
        imageUrl: '/shoes/jet-black-boots.png',
        category: 'Boots',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 13,
        productName: 'Lunar Luster',
        brand: 'RebelStyle',
        price: 49.95,
        imageUrl: '/shoes/lunar-luster-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 14,
        productName: 'Mat Mint Green Heels',
        brand: 'RebelStyle',
        price: 49.95,
        imageUrl: '/shoes/mat-mint-green-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 15,
        productName: 'Midnight Chic',
        brand: 'RebelStyle',
        price: 49.95,
        imageUrl: '/shoes/midnight-chic-ankle-boots.png',
        category: 'Boots',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 16,
        productName: 'Midnight Mystery',
        brand: 'RebelStyle',
        price: 18.95,
        imageUrl: '/shoes/midnight-mystery-boots.png',
        category: 'Boots',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 17,
        productName: 'Noir Nightfall',
        brand: 'RebelStyle',
        price: 39.95,
        imageUrl: '/shoes/noir-nightfall-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 18,
        productName: 'Nostalgic Sharm',
        brand: 'RebelStyle',
        price: 28.95,
        imageUrl: '/shoes/nostalgic-sharm-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 19,
        productName: 'Ocean Blue',
        brand: 'RebelStyle',
        price: 25.95,
        imageUrl: '/shoes/ocean-blue-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 20,
        productName: 'Ruby Red Glamour',
        brand: 'RebelStyle',
        price: 52.95,
        imageUrl: '/shoes/ruby-red-glamour-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 21,
        productName: 'Sleek Ebony Zipper',
        brand: 'RebelStyle',
        price: 49.95,
        imageUrl: '/shoes/sleek-ebony-zipper-boots.png',
        category: 'Boots',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 22,
        productName: 'Snowdrop',
        brand: 'RebelStyle',
        price: 43.95,
        imageUrl: '/shoes/snowdrop-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 23,
        productName: 'Wine Velvet',
        brand: 'RebelStyle',
        price: 47.95,
        imageUrl: '/shoes/wine-velvet-heels.png',
        category: 'Heels',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    }
];

const HeelsComponent = () => {

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
                                <a href='#' onClick={() => handleCategoryClick('Heels')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Heels' ? 'font-bold' : ''}`}>Heels</a>
                                <a href='#' onClick={() => handleCategoryClick('Boots')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Boots' ? 'font-bold' : ''}`}>Boots</a>
                                <a href='#' onClick={() => handleCategoryClick('Sneakers')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Sneakers' ? 'font-bold' : ''}`}>Sneakers</a>
                                <a href='#' onClick={() => handleCategoryClick('Booties')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Booties' ? 'font-bold' : ''}`}>Booties</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Heels')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Heels' ? 'font-bold' : ''}`}>Heels</a>
                        <a href='#' onClick={() => handleCategoryClick('Boots')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Boots' ? 'font-bold' : ''}`}>Boots</a>
                        <a href='#' onClick={() => handleCategoryClick('Sneakers')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Sneakers' ? 'font-bold' : ''}`}>Sneakers</a>
                        <a href='#' onClick={() => handleCategoryClick('Booties')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Booties' ? 'font-bold' : ''}`}>Booties</a>
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

export default HeelsComponent;
