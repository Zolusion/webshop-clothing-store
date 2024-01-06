"use client";
import Image from 'next/image';
import React, { useState } from 'react'; import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        id: 1,
        productName: 'Puffer Jacket with Hood',
        description: 'Face the cold in style with the Puffer Jacket featuring a protective hood. Stay fashionable while staying warm with this essential winter piece.',
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
        description: 'This stylish crop puffer jacket is perfect for staying warm and fashionable during colder days.',
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
        description: 'Stay cozy and stylish with this cord puffer jacket. Made with high-quality materials to keep you warm in colder weather.',
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
        description: 'Add a touch of elegance to your look with this earthy emerald blazer. This classic coat is perfect for any occasion. ',
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
        description: 'Elevate your look with this woodland blazer. This classic coat is perfect for any occasion. ',
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
        description: 'Step into the world of enchantment with the Mystic Mirage trench coat. This stylish and versatile coat is perfect for adding a touch of magic to your wardrobe.',
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
        description: 'Embrace elegance with the Apricot Aura trench coat. This stunning trench coat features a beautiful apricot color and a timeless design that will elevate any outfit.',
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
        description: 'Feel like royalty in the Pistachio Princess trench coat. This elegant and sophisticated coat features a beautiful pistachio color that will make you stand out.',
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
        description: 'Step into a world of enchantment with the Mint Mirage trench coat. This stunning coat features a mesmerizing mint color and a timeless design.',
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
        description: 'Experience the beauty of nature with the Verdant Vista trench coat. This coat showcases a vibrant green color and a stylish design that will turn heads.',
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
        description: 'Create a dreamy look with the Pastel Oasis trench coat. This coat features a soft pastel color palette that will transport you to a serene oasis.',
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
        description: 'Channel your inner elegance with the Marine Majesty trench coat. This coat showcases a deep blue color reminiscent of the vast ocean.',
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
        description: 'Stay cozy and stylish with the Minty Dream puffer jacket. This jacket features a refreshing mint color and a comfortable fit for colder days.',
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
        description: 'Make a fashionable statement with the Denim Diva denim jacket. This jacket features a trendy denim fabric and a stylish design that will elevate any outfit.',
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
        description: 'Add a pop of color to your wardrobe with the Cobalt Grace denim jacket. This jacket showcases a vibrant cobalt blue shade that will make you stand out.',
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
        description: 'Embrace the beauty of the sky with the Sapphire Sky denim jacket. This jacket showcases a subtle shade of blue that will make you stand out.',
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
        description: 'Experience timeless style with the Indigo Grace denim jacket. Perfect for those who appreciate classic style and minimalistic design.',
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
        description: 'Stay warm and stylish with the Snowflake Puffer Jacket. This jacket features a warm and classic look that will keep you warm and stylish.',
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
        description: 'Add a pop of color to your wardrobe with the Sparkling Gold Puffer Jacket. Never forget a classic look with the Sparkling Gold Puffer Jacket.',
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
        description: 'Embrace the cold with the Frostbite Puffer Jacket. A classic look with the Frostbite Puffer Jacket.',
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
        description: 'Comfortable with the Navy Teddy Puffer Jacket. Be warm and stylish with the Navy Teddy Puffer Jacket.',
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
        description: 'Love is in the air with the Blueberry Bliss Puffer Jacket. A classic look with the Blueberry Bliss Puffer Jacket.',
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
        description: 'Brown and white with a touch of hazelnut on the front. Nothing beats the classics of the classic look with the Hazelnut Office Jacket.',
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
        description: 'A classic look with the Sandstone Sophistication Denim Jacket. Nothing beats the classic look with the Sandstone Sophistication Denim Jacket.',
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
        description: 'A classic look with the Slate Sophistication Denim Jacket. Nothing beats the classic look with the Slate Sophistication Denim Jacket.',
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
        description: 'A classic look with the Champagne Office Jacket. Nothing beats the classic look with the Champagne Office Jacket.',
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
        description: 'A classic look with the Misty Modernity Office Jacket. Nothing beats the classic look with the Misty Modernity Office Jacket.',
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
        description: 'A classic look with the Coffee Mocka Leather Jacket. Nothing beats the classic look with the Coffee Mocka Leather Jacket.',
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
        description: 'A classic look with the Woolly Wonderland Leather Jacket. Nothing beats the classic look with the Woolly Wonderland Leather Jacket.',
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
        description: 'A classic look with the Latte Luxury Leather Jacket. Nothing beats the classic look with the Latte Luxury Leather Jacket.',
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
        description: 'A classic look with the Truffle Toast Leather Jacket. Nothing beats the classic look with the Truffle Toast Leather Jacket.',
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
                                <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
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
                        <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
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
                                    <p className='font-bold mb-2'>{product.description}</p>
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
