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
        description: 'Turn heads at any special occasion with this elegant evening gown. It boasts a timeless design and impeccable craftsmanship.',
        brand: 'Fashionista',
        price: 149.99,
        imageUrl: '/eveningdresses/dress1.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 2,
        productName: 'Frosty Horizon ',
        description: 'Add a touch of luxury to your wardrobe with this frosty horizon. Crafted from high-quality fabrics, this dress is both stylish and elegant.',
        brand: 'TrendyStyles',
        price: 89.95,
        imageUrl: '/midi-dresses/mididress5.png',
        category: 'Evening Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 3,
        productName: 'Royal Blue Elegance',
        description: 'Dazzle the night away in this royal blue evening gown. Its intricate detailing and flattering silhouette make it a standout choice.',
        brand: 'Glamour Couture',
        price: 179.99,
        imageUrl: '/midi-dresses/mididress7.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 4,
        productName: 'Sapphire Dreams',
        description: 'Make a statement with this sapphire-colored evening dress. The flowing fabric and modern design create an unforgettable look.',
        brand: 'Chic Elegance',
        price: 129.95,
        imageUrl: '/midi-dresses/mididress8.png',
        category: 'Evening Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 5,
        productName: 'Blush Bloom Midi',
        description: 'Embrace the floral trend with this blush bloom midi dress. Perfect for daytime events and garden parties.',
        brand: 'Petite Chic',
        price: 69.99,
        imageUrl: '/midi-dresses/mididress9.png',
        category: 'Midi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 6,
        productName: 'Polka Dot Delight',
        description: 'Step out in style with this polka dot midi dress. The classic pattern combined with a modern twist creates a playful yet sophisticated look.',
        brand: 'Fashion Fusion',
        price: 79.95,
        imageUrl: '/midi-dresses/mididress10.png',
        category: 'Midi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 7,
        productName: 'Sunset Serenity Maxi',
        description: 'Capture the beauty of a sunset in this serenity maxi dress. The flowing design and warm colors make it a perfect choice for beach events.',
        brand: 'Sunset Styles',
        price: 109.99,
        imageUrl: '/maxi-dresses/maxidress1.png',
        category: 'Maxi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 8,
        productName: 'Bohemian Rhapsody',
        description: 'Channel bohemian vibes with this rhapsody maxi dress. Perfect for summer festivals or casual outdoor gatherings.',
        brand: 'Boho Bliss',
        price: 94.95,
        imageUrl: '/maxi-dresses/maxidress2.png',
        category: 'Maxi',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 9,
        productName: 'Weekend Comfort',
        description: 'Stay comfortable and stylish with this weekend casual dress. Perfect for brunches or a relaxed day out with friends.',
        brand: 'Casual Comforts',
        price: 49.99,
        imageUrl: '/casual-dresses/casual1.png',
        category: 'Casual',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 10,
        productName: 'Denim Delight',
        description: 'Elevate your casual look with this denim delight dress. Versatile and easy to style for a laid-back yet trendy appearance.',
        brand: 'Urban Chic',
        price: 59.95,
        imageUrl: '/casual-dresses/casual2.png',
        category: 'Casual',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 11,
        productName: 'Golden Horizon ',
        description: 'Add a touch of luxury to your wardrobe with this golden horizon. Crafted from high-quality fabrics, this dress is both stylish and elegant.',
        brand: 'TrendyStyles',
        price: 89.95,
        imageUrl: '/eveningdresses/dress2.png',
        category: 'Evening Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 12,
        productName: 'Cinderellas Dream',
        description: 'Feel like a princess in this enchanting ball gown. The magical design and exquisite details will make any event unforgettable.',
        brand: 'Fairytale Fashions',
        price: 249.99,
        imageUrl: '/ball-gowns/gown1.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },

    {
        id: 13,
        productName: 'Midnight Masquerade',
        description: 'Turn heads at the ball with this midnight masquerade ball gown. The mysterious allure and intricate craftsmanship make it a showstopper.',
        brand: 'Mystique Couture',
        price: 199.95,
        imageUrl: '/ball-gowns/gown2.png',
        category: 'Ball Gowns',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 14,
        productName: 'Retro Glamour',
        description: 'Step back in time with this retro glamour dress. Vintage-inspired and timeless, it is perfect for adding a touch of nostalgia to your wardrobe.',
        brand: 'Timeless Trends',
        price: 89.99,
        imageUrl: '/vintage-dresses/vintage1.png',
        category: 'Vintage',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },

    {
        id: 15,
        productName: 'Classic Elegance',
        description: 'Embrace classic elegance with this vintage-inspired dress. The refined silhouette and delicate details create a look that transcends time.',
        brand: 'Eternal Style',
        price: 79.95,
        imageUrl: '/vintage-dresses/vintage2.png',
        category: 'Vintage',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 16,
        productName: 'Chic Wrap Fusion',
        description: 'Achieve a stylish look with this chic wrap dress. The flattering wrap design and modern prints make it a versatile addition to your wardrobe.',
        brand: 'Wrap It Up',
        price: 59.99,
        imageUrl: '/wrap-dresses/wrap1.png',
        category: 'Wrap Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 17,
        productName: 'Floral Wrap Fantasy',
        description: 'Wrap yourself in floral elegance with this fantasy wrap dress. Perfect for both casual outings and semi-formal gatherings.',
        brand: 'Floral Bliss',
        price: 69.95,
        imageUrl: '/wrap-dresses/wrap2.png',
        category: 'Wrap Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 18,
        productName: 'Sunny Day Delight',
        description: 'Embrace the sunshine with this sunny day summer dress. The light fabric and vibrant colors make it a must-have for your summer wardrobe.',
        brand: 'Sunshine Styles',
        price: 39.99,
        imageUrl: '/summer-dresses/sunnyday-delight.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 19,
        productName: 'Tropical Breeze',
        description: 'Feel the tropical breeze in this summer dress. The tropical prints and breezy design create a laid-back yet stylish vibe.',
        brand: 'Tropical Trends',
        price: 49.95,
        imageUrl: '/summer-dresses/tropical-breeze.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 20,
        productName: 'Timeless Black Elegance',
        description: 'Elevate your wardrobe with this timeless black dress. Classic and versatile, it is a staple piece for any elegant occasion.',
        brand: 'Elegance Defined',
        price: 79.99,
        imageUrl: '/summer-dresses/timeless-black-elegance.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 21,
        productName: 'Ivory Sophistication',
        description: 'Radiate sophistication in this ivory classic dress. The simple yet elegant design is perfect for a variety of occasions.',
        brand: 'Ivory Elegance',
        price: 69.95,
        imageUrl: '/summer-dresses/ivory-sophistication.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: 22,
        productName: 'Sunshine Serenity',
        description: 'Immerse yourself in the beauty of this sunny day summer dress. The light fabric and vibrant colors make it a must-have for your summer wardrobe.',
        brand: 'Classic Style',
        price: 59.99,
        imageUrl: '/summer-dresses/sunshine-serenity.png',
        category: 'Summer Dresses',
        button: {
            cart: "Add to cart",
            link: "#",
        }
    },
    {
        id: 23,
        productName: 'Vintage Charm',
        description: 'Elevate your wardrobe with this classic black dress. Classic and versatile, it is a staple piece for any elegant occasion.',
        brand: 'Classic Style',
        price: 79.99,
        imageUrl: '/classic-dresses/vintage-charm.png',
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

export default DressesComponent;
