"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    imageSrc: string;
    category: string;
}

const DressesComponent = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    const calculateTotalPrice = (): { totalPrice: number; vat: string } => {
        const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
        const vat = (totalPrice * 0.21).toFixed(2);
        return { totalPrice, vat };
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const products: Product[] = [
        {
            id: 1,
            name: 'Elegant Evening Gown',
            description: 'Turn heads at any special occasion with this elegant evening gown. It boasts a timeless design and impeccable craftsmanship.',
            brand: 'Fashionista',
            price: 149.99,
            imageSrc: 'https://i.pinimg.com/474x/d3/09/1b/d3091becbf106560f934268b8883b854.jpg',
            category: 'Evening Dresses',
        },
        {
            id: 2,
            name: 'Chic Cocktail Dress',
            description: 'Make a statement at cocktail parties with this chic cocktail dress. Its modern style and flattering silhouette are sure to impress.',
            brand: 'TrendyStyles',
            price: 89.95,
            imageSrc: 'https://i.pinimg.com/474x/7a/a4/b1/7aa4b1cc25285e54cf6be59296f9368e.jpg',
            category: 'Cocktail Dresses',
        },
        {
            id: 3,
            name: 'Bohemian Maxi Dress',
            description: 'Embrace boho vibes with this flowy and comfortable maxi dress. Perfect for a laid-back day out or a beach getaway.',
            brand: 'BohoChic',
            price: 68.99,
            imageSrc: 'https://i.pinimg.com/474x/a1/14/0b/a1140bccc28e0df130170aef9703d417.jpg',
            category: 'Maxi',
        },
        {
            id: 4,
            name: 'Floral Summer Dress',
            description: 'Step into summer with this vibrant floral dress. Its lightweight fabric and playful design are perfect for warm, sunny days.',
            brand: 'SunshineStyles',
            price: 54.99,
            imageSrc: 'https://i.pinimg.com/474x/e6/a7/91/e6a7912231fbbb4bcd152a96b743df20.jpg',
            category: 'Summer Dresses',
        },
        {
            id: 5,
            name: 'Classic Little Black Dress',
            description: 'A wardrobe essential, this little black dress exudes timeless elegance. Versatile enough for various occasions.',
            brand: 'TimelessClassics',
            price: 79.95,
            imageSrc: 'https://i.pinimg.com/474x/65/97/e0/6597e04f1a6ddfa90f6e68981536279d.jpg',
            category: 'Classic',
        },
        {
            id: 6,
            name: 'Boho-Chic Midi Dress',
            description: 'Channel bohemian vibes with this midi dress featuring intricate patterns and a relaxed, boho-chic silhouette.',
            brand: 'FreeSpirit',
            price: 42.99,
            imageSrc: 'https://i.pinimg.com/474x/eb/ed/f4/ebedf485acaa9bee893b92a4f08c7d17.jpg',
            category: 'Midi',
        },
        {
            id: 7,
            name: 'Glamorous Ball Gown',
            description: 'Make a grand entrance at formal events in this glamorous ball gown. The intricate details and luxurious fabric ensure a show-stopping look.',
            brand: 'GlamourCouture',
            price: 199.99,
            imageSrc: 'https://i.pinimg.com/474x/f5/b2/f3/f5b2f3a84f9ec05ff1562fc1dcde2b27.jpg',
            category: 'Ball Gowns',
        },
        {
            id: 8,
            name: 'Casual Denim Dress',
            description: 'Achieve a laid-back yet stylish look with this casual denim dress. Perfect for weekend outings and casual gatherings.',
            brand: 'DenimDelight',
            price: 45.99,
            imageSrc: 'https://i.pinimg.com/474x/e4/7f/bd/e47fbd851fda39903d034ffb6fe620da.jpg',
            category: 'Denim',
        },
        {
            id: 9,
            name: 'Flirty Wrap Dress',
            description: 'Flatter your figure with this flirty wrap dress. The wrap-around style adds a touch of sophistication to your ensemble.',
            brand: 'FlirtFashions',
            price: 59.99,
            imageSrc: 'https://i.pinimg.com/474x/c7/e2/e0/c7e2e0dd124d9c198ca1b08145a5f619.jpg',
            category: 'Wrap Dresses',
        },
        {
            id: 10,
            name: 'Vintage-Inspired Tea Dress',
            description: 'Transport yourself to the past with this vintage-inspired tea dress. Its timeless charm makes it a unique addition to your wardrobe.',
            brand: 'VintageVogue',
            price: 78.99,
            imageSrc: 'https://i.pinimg.com/474x/9d/78/4b/9d784b2f7d1f42138240cc9e86019c56.jpg',
            category: 'Vintage',
        },
    ];

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };



    const imagesMatchingNames = products.map(product => product.imageSrc);

    console.log(imagesMatchingNames);

    return (
        <div className='px-6 p-4 bg-gray-100 shadow-md'>
            <div className='flex flex-col md:flex-row w-full mb-4 justify-between'>
                <div className='mb-4 md:mb-0'>
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

                <div className='flex flex-col md:flex-row font-bold md:justify-center md:items-center'>
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

            <hr className='mb-4' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-8'>
                {(searchQuery ? filteredProducts : products).map((product) => (
                    <div key={product.id} className={`mb-8 ${selectedCategory && product.category !== selectedCategory ? 'hidden' : ''} `}>
                        <Image
                            src={product.imageSrc}
                            alt={product.name}
                            className='w-full h-[500px] object-cover rounded-md mb-4 2xl:h-[900px]'
                            loading='lazy'
                            width={500}
                            height={500}
                        />

                        <div className='flex flex-col justify-between h-[200px]'>
                            <h3 className='text-[20px] text-black font-thin'>{product.name}</h3>
                            <p className='text-black font-bold mb-4'>{product.description}</p>
                            <div className='flex items-center'>
                                <p className='text-[18px] font-semibold text-black'>€{product.price}</p>
                                <div className='ml-4'>
                                    <button
                                        className='text-black hover:underline transition duration-300 mr-4'
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button className='bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 transition duration-300'>
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
