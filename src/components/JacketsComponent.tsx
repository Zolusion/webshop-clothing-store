"use client";
import Image from 'next/image';
import React, { useState } from 'react'; import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        id: 1,
        productName: 'Puffer Jacket with Hood',
        brand: 'WinterChic',
        price: 69.99,
        imageUrl: '/puffer-jacket/angled-long-bob-white-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 2,
        productName: 'CropPuffer Jacket',
        brand: 'CasualComfort',
        price: 39.95,
        imageUrl: '/puffer-jacket/big-shoulder-grazing-curls-green-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 3,
        productName: 'Cord Puffer Jacket',
        brand: 'CasualComfort',
        price: 34.95,
        imageUrl: '/puffer-jacket/shaggy-shoulder-cut-white-capuchon-black-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 4,
        productName: 'Earthy Emerald Blazer',
        brand: 'CasualComfort',
        price: 24.95,
        imageUrl: '/jackets/earthy-emerald-blazer.png',
        category: 'Blazers',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 5,
        productName: 'Woodland Blazer',
        brand: 'CasualComfort',
        price: 26.99,
        imageUrl: '/jackets/woodland-blazer.png',
        category: 'Blazers',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 6,
        productName: 'Mystic Mirage',
        brand: 'CasualComfort',
        price: 29.95,
        imageUrl: '/jackets/mystic-mirage-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 7,
        productName: 'Apricot Aura',
        brand: 'CasualComfort',
        price: 38.95,
        imageUrl: '/jackets/apricot-aura-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        id: 8,
        productName: 'Pistachio Princess',
        brand: 'CasualComfort',
        price: 46.95,
        imageUrl: '/jackets/pistachio-princess-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 9,
        productName: 'Mint Mirage',
        brand: 'CasualComfort',
        price: 29.95,
        imageUrl: '/jackets/mint-mirage-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 10,
        productName: 'Verdant Vista',
        brand: 'CasualComfort',
        price: 28.95,
        imageUrl: '/jackets/verdant-vista-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 11,
        productName: 'Pastel Oasis',
        brand: 'CasualComfort',
        price: 22.95,
        imageUrl: '/jackets/pastel-oasis-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 12,
        productName: 'Marine Majesty',
        brand: 'CasualComfort',
        price: 19.95,
        imageUrl: '/jackets/marine-majesty-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 13,
        productName: 'Minty Dream',
        brand: 'CasualComfort',
        price: 39.95,
        imageUrl: '/jackets/minty-dream-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 14,
        productName: 'Denim Diva',
        brand: 'CasualComfort',
        price: 28.95,
        imageUrl: '/jackets/denim-diva-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 15,
        productName: 'Cobalt Grace',
        brand: 'CasualComfort',
        price: 21.95,
        imageUrl: '/jackets/cobalt-grace-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 16,
        productName: 'Sapphire Sky',
        brand: 'CasualComfort',
        price: 29.95,
        imageUrl: '/jackets/sapphire-sky-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 17,
        productName: 'Indigo Grace',
        brand: 'CasualComfort',
        price: 19.95,
        imageUrl: '/jackets/indigo-grace-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 18,
        productName: 'Snowflake',
        brand: 'WinterChic',
        price: 39.95,
        imageUrl: '/jackets/snowflake-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 19,
        productName: 'Sparkling Gold',
        brand: 'WinterChic',
        price: 32.95,
        imageUrl: '/jackets/sparkling-gold-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 20,
        productName: 'Frostbite',
        brand: 'WinterChic',
        price: 29.95,
        imageUrl: '/jackets/frostbite-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 21,
        productName: 'Navy Teddy',
        brand: 'WinterChic',
        price: 26.95,
        imageUrl: '/jackets/navy-teddy-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 22,
        productName: 'Blueberry Bliss',
        brand: 'WinterChic',
        price: 34.95,
        imageUrl: '/jackets/blueberry-bliss-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 23,
        productName: 'Hazelnut',
        brand: 'WinterChic',
        price: 48.95,
        imageUrl: '/jackets/hazelnut-harmony-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 24,
        productName: 'Sandstone Sophistication',
        brand: 'WinterChic',
        price: 39.95,
        imageUrl: '/jackets/sandstone-sophistication-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 25,
        productName: 'Slate Sophistication',
        brand: 'WinterChic',
        price: 28.95,
        imageUrl: '/jackets/slate-sophistication-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 26,
        productName: 'Champagne',
        brand: 'WinterChic',
        price: 24.95,
        imageUrl: '/jackets/champagne-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 27,
        productName: 'Misty Modernity',
        brand: 'WinterChic',
        price: 26.95,
        imageUrl: '/jackets/misty-modernity-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 28,
        productName: 'Coffee Mocka',
        brand: 'WinterChic',
        price: 29.95,
        imageUrl: '/jackets/coffee-mocka-leather-coat.png',
        category: 'Leather Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 29,
        productName: 'Woolly Wonderland',
        brand: 'WinterChic',
        price: 34.95,
        imageUrl: '/jackets/woolly-wonderland-winter-jacket.png',
        category: 'Winter Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 30,
        productName: 'Latte Luxury',
        brand: 'WinterChic',
        price: 38.95,
        imageUrl: '/jackets/latte-luxury-winter-jacket.png',
        category: 'Winter Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        id: 31,
        productName: 'Truffle Toast',
        brand: 'WinterChic',
        price: 39.95,
        imageUrl: '/jackets/truffle-toast-winter-jacket-2.png',
        category: 'Winter Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    }
];

const JacketsComponent = () => {

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
                                <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
                                <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                                <a href='#' onClick={() => handleCategoryClick('Trench Coats')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Trench Coats' ? 'font-bold' : ''}`}>Trench Coats</a>
                                <a href='#' onClick={() => handleCategoryClick('Denim')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                                <a href='#' onClick={() => handleCategoryClick('Office Jackets')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Office Jackets' ? 'font-bold' : ''}`}>Office Jackets</a>
                                <a href='#' onClick={() => handleCategoryClick('Leather Coats')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Leather Coats' ? 'font-bold' : ''}`}>Leather Coats</a>
                                <a href='#' onClick={() => handleCategoryClick('Winter Jackets')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Winter Jackets' ? 'font-bold' : ''}`}>Winter Jackets</a>
                            </div>
                        )}
                    </div>
                    <div className='hidden md:flex space-x-6'>
                        <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
                        <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                        <a href='#' onClick={() => handleCategoryClick('Trench Coats')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Trench Coats' ? 'font-bold' : ''}`}>Trench Coats</a>
                        <a href='#' onClick={() => handleCategoryClick('Denim')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                        <a href='#' onClick={() => handleCategoryClick('Office Jackets')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Office Jackets' ? 'font-bold' : ''}`}>Office Jackets</a>
                        <a href='#' onClick={() => handleCategoryClick('Leather Coats')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Leather Coats' ? 'font-bold' : ''}`}>Leather Coats</a>
                        <a href='#' onClick={() => handleCategoryClick('Winter Jackets')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Winter Jackets' ? 'font-bold' : ''}`}>Winter Jackets</a>
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

export default JacketsComponent;
