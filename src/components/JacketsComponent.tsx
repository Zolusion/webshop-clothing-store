"use client";
import Image from 'next/image';
import React, { useState } from 'react'; import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        productName: 'Puffer Jacket with Hood',
        price: 69.99,
        imageUrl: '/puffer-jacket/angled-long-bob-white-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'CropPuffer Jacket',
        price: 39.95,
        imageUrl: '/puffer-jacket/big-shoulder-grazing-curls-green-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'Cord Puffer Jacket',
        price: 34.95,
        imageUrl: '/puffer-jacket/shaggy-shoulder-cut-white-capuchon-black-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'Earthy Emerald Blazer',
        price: 24.95,
        imageUrl: '/jackets/earthy-emerald-blazer.png',
        category: 'Blazers',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'Woodland Blazer',
        price: 26.99,
        imageUrl: '/jackets/woodland-blazer.png',
        category: 'Blazers',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'Mystic Mirage',
        price: 29.95,
        imageUrl: '/jackets/mystic-mirage-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'Apricot Aura',
        price: 38.95,
        imageUrl: '/jackets/apricot-aura-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: "Add to Cart",
            link: "#",
        }
    },
    {
        productName: 'Pistachio Princess',
        price: 46.95,
        imageUrl: '/jackets/pistachio-princess-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Mint Mirage',
        price: 29.95,
        imageUrl: '/jackets/mint-mirage-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Verdant Vista',
        price: 28.95,
        imageUrl: '/jackets/verdant-vista-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Pastel Oasis',
        price: 22.95,
        imageUrl: '/jackets/pastel-oasis-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Marine Majesty',
        price: 19.95,
        imageUrl: '/jackets/marine-majesty-trench-coat.png',
        category: 'Trench Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Minty Dream',
        price: 39.95,
        imageUrl: '/jackets/minty-dream-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Denim Diva',
        price: 28.95,
        imageUrl: '/jackets/denim-diva-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Cobalt Grace',
        price: 21.95,
        imageUrl: '/jackets/cobalt-grace-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Sapphire Sky',
        price: 29.95,
        imageUrl: '/jackets/sapphire-sky-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Indigo Grace',
        price: 19.95,
        imageUrl: '/jackets/indigo-grace-denim-jacket.png',
        category: 'Denim',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Snowflake',
        price: 39.95,
        imageUrl: '/jackets/snowflake-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Sparkling Gold',
        price: 32.95,
        imageUrl: '/jackets/sparkling-gold-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Frostbite',
        price: 29.95,
        imageUrl: '/jackets/frostbite-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Navy Teddy',
        price: 26.95,
        imageUrl: '/jackets/navy-teddy-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Blueberry Bliss',
        price: 34.95,
        imageUrl: '/jackets/blueberry-bliss-puffer-jacket.png',
        category: 'Puffer Jacket',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Hazelnut',
        price: 48.95,
        imageUrl: '/jackets/hazelnut-harmony-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Sandstone Sophistication',
        price: 39.95,
        imageUrl: '/jackets/sandstone-sophistication-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Slate Sophistication',
        price: 28.95,
        imageUrl: '/jackets/slate-sophistication-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Champagne',
        price: 24.95,
        imageUrl: '/jackets/champagne-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Misty Modernity',
        price: 26.95,
        imageUrl: '/jackets/misty-modernity-office-jacket.png',
        category: 'Office Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Coffee Mocka',
        price: 29.95,
        imageUrl: '/jackets/coffee-mocka-leather-coat.png',
        category: 'Leather Coats',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Woolly Wonderland',
        price: 34.95,
        imageUrl: '/jackets/woolly-wonderland-winter-jacket.png',
        category: 'Winter Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Latte Luxury',
        price: 38.95,
        imageUrl: '/jackets/latte-luxury-winter-jacket.png',
        category: 'Winter Jackets',
        button: {
            cart: 'Add to Cart',
            link: '#',
        }
    },
    {
        productName: 'Truffle Toast',
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
