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

const JacketsComponent = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const products: Product[] = [
        {
            id: 1,
            name: 'Stylish Leather Jacket',
            description: 'Make a statement with the Stylish Leather Jacket. Crafted for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'Fashion Forward',
            price: 79.99,
            imageSrc: 'https://i.pinimg.com/474x/a2/95/2b/a2952bd4ddeafe9102caa3ba6ae9e30d.jpg',
            category: 'Leather Coats',
        },
        {
            id: 2,
            name: 'Quilted Winter Coat',
            description: 'Stay warm and cozy in the Quilted Winter Coat. Designed for cold weather, this jacket combines fashion and functionality effortlessly.',
            brand: 'WarmStyle',
            price: 89.95,
            imageSrc: 'https://i.pinimg.com/474x/08/0e/f4/080ef406bcf1ff0ed8216e704b9d25c9.jpg',
            category: 'Winter Jackets',
        },
        {
            id: 3,
            name: 'Classic Denim Jacket',
            description: 'Complete your casual look with the Classic Denim Jacket. Timeless in style, this jacket is a versatile addition to your wardrobe.',
            brand: 'DenimStyle',
            price: 49.99,
            imageSrc: 'https://i.pinimg.com/474x/bd/e8/c7/bde8c782b8645029f66e80b3850983b1.jpg',
            category: 'Denim',
        },
        {
            id: 4,
            name: 'Puffer Jacket with Hood',
            description: 'Face the cold in style with the Puffer Jacket featuring a protective hood. Stay fashionable while staying warm with this essential winter piece.',
            brand: 'WinterChic',
            price: 69.99,
            imageSrc: 'https://i.pinimg.com/474x/9f/08/09/9f0809bc17aebe0c65d19e789fb3d914.jpg',
            category: 'Puffer Jacket',
        },
        {
            id: 5,
            name: 'Faux Leather Biker Jacket',
            description: 'Embrace a bold look with the Faux Leather Biker Jacket. This edgy jacket adds a touch of rebellion to your style, perfect for a confident statement.',
            brand: 'RebelStyle',
            price: 59.95,
            imageSrc: 'https://i.pinimg.com/474x/a8/ac/63/a8ac63cb5d3fb74f7337658170b18434.jpg',
            category: 'Leather Coats',
        },
        {
            id: 6,
            name: 'Hooded Parka Jacket',
            description: 'Stay on-trend with the Hooded Parka Jacket. This versatile jacket combines fashion and function, making it a go-to choice for various occasions.',
            brand: 'TrendyOuterwear',
            price: 79.99,
            imageSrc: 'https://i.pinimg.com/474x/52/aa/ac/52aaac03a646b61ce0705924e7541a27.jpg',
            category: 'Winter Jackets',
        },
        {
            id: 7,
            name: 'Quilted Leather Bomber',
            description: 'Add a touch of urban style with the Quilted Leather Bomber. This jacket merges sophistication with streetwear, creating a unique and fashionable look.',
            brand: 'UrbanElegance',
            price: 99.99,
            imageSrc: 'https://i.pinimg.com/474x/65/ca/c6/65cac655f75d388b6a94669b51cb7bca.jpg',
            category: 'Leather Coats',
        },
        {
            id: 8,
            name: 'Sheepskin Shearling Coat',
            description: 'Stay warm and stylish in the Sheepskin Shearling Coat. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 39.99,
            imageSrc: 'https://i.pinimg.com/474x/65/23/cf/6523cf63fdd848766b4e953128518091.jpg',
            category: 'Leather Coats',
        },
        {
            id: 9,
            name: 'Temparament Tweed Suit',
            description: 'Stay stylish and comfortable in the Temparament Tweed Suit. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'OutdoorReady',
            price: 129.95,
            imageSrc: 'https://i.pinimg.com/564x/c1/50/d4/c150d424d714fc099a6d1add0f8bd025.jpg',
            category: 'Blazers',
        },
        {
            id: 10,
            name: 'Fur-Lined Winter Parka',
            description: 'Stay cozy in the cold with the Fur-Lined Winter Parka. This jacket combines warmth and style, making it a winter essential for fashion-conscious individuals.',
            brand: 'WinterLuxury',
            price: 109.99,
            imageSrc: 'https://i.pinimg.com/474x/44/59/79/445979a15cd204004e1138d892ee8b91.jpg',
            category: 'Winter Jackets',
        },
        {
            id: 11,
            name: 'Trendy Bomber Jacket',
            description: 'Elevate your street style with the Trendy Bomber Jacket. Featuring a sleek design, this jacket is a fashion-forward choice for any casual occasion.',
            brand: 'StreetStyle',
            price: 79.99,
            imageSrc: 'https://i.pinimg.com/474x/96/c2/28/96c228439d75de113e4e6f0c9e7398ab.jpg',
            category: 'Bomber Jackets',
        },
        {
            id: 12,
            name: 'Classic Office Jacket',
            description: 'Stay stylish and comfortable in the Classic Office Jacket. Designed for both comfort and fashion, this jacket is a must-have for any office or work environment.',
            brand: 'CasualComfort',
            price: 59.95,
            imageSrc: 'https://i.pinimg.com/474x/8f/8e/16/8f8e165151dded0fd7b9e7587dd9878a.jpg',
            category: 'Office Jackets',
        },
        {
            id: 13,
            name: 'Trench Coat',
            description: 'Stay warm and stylish in the Trench Coat. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 59.95,
            imageSrc: 'https://i.pinimg.com/474x/49/e1/90/49e190abd03c03c9b8891dd0fae3e75d.jpg',
            category: 'Trench Coats',
        },
        {
            id: 14,
            name: 'Barouque Blazer',
            description: 'Stay stylish and comfortable in the Barouque Blazer. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 38.95,
            imageSrc: 'https://i.pinimg.com/564x/2e/cd/30/2ecd309714ce45688c2e3d4b602dc685.jpg',
            category: 'Blazers',
        },
        {
            id: 15,
            name: 'Christian Siriano',
            description: 'Stay stylish and comfortable in the Christian Siriano Blazer. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 29.95,
            imageSrc: 'https://i.pinimg.com/564x/a0/9e/6c/a09e6c9ebc28349299ec4796b91362c4.jpg',
            category: 'Blazers',
        },
        {
            id: 16,
            name: 'CropPuffer Jacket',
            description: 'Stay stylish and comfortable in the CropPuffer Jacket. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 39.95,
            imageSrc: 'https://i.pinimg.com/564x/ae/50/8c/ae508c026b8b7e401695e4e49c551a51.jpg',
            category: 'Puffer Jacket',
        },
        {
            id: 17,
            name: 'Cord Puffer Jacket',
            description: 'Stay stylish and comfortable in the CordPuffer Jacket. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 34.95,
            imageSrc: 'https://i.pinimg.com/564x/85/7d/7d/857d7d0b3f5234d99eda6de11daf4d31.jpg',
            category: 'Puffer Jacket',
        },
        {
            id: 18,
            name: 'Rhinestone Blazer',
            description: 'Stay stylish and comfortable in the Rhinestone Blazer. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 59.95,
            imageSrc: 'https://i.pinimg.com/564x/73/99/82/739982e3a04cdd85141a9d6b0fa0590e.jpg',
            category: 'Blazers',
        },
        {
            id: 19,
            name: 'Flap Pocket Crop Denim Jacket',
            description: 'Stay stylish and comfortable in the Flap Pocket Crop Denim Jacket. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 39.95,
            imageSrc: 'https://i.pinimg.com/564x/a7/b4/7f/a7b47fa8ed60186ade85ab5e21efa5cd.jpg',
            category: 'Denim',
        },
        {
            id: 20,
            name: 'Jules Belt',
            description: 'Stay stylish and comfortable in the Jules Belt Denim Jacket. Designed for both comfort and fashion, this jacket is a must-have for any wardrobe.',
            brand: 'CasualComfort',
            price: 29.95,
            imageSrc: 'https://i.pinimg.com/564x/f3/c6/3d/f3c63d4135ee3e4f48ef4e99ab052e22.jpg',
            category: 'Denim',
        }
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
                                <a href='#' onClick={() => handleCategoryClick('Puffer Jacket')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Puffer Jacket' ? 'font-bold' : ''}`}>Puffer Jacket</a>
                                <a href='#' onClick={() => handleCategoryClick('Blazers')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Blazers' ? 'font-bold' : ''}`}>Blazers</a>
                                <a href='#' onClick={() => handleCategoryClick('Trench Coats')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Trench Coats' ? 'font-bold' : ''}`}>Trench Coats</a>
                                <a href='#' onClick={() => handleCategoryClick('Denim')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Denim' ? 'font-bold' : ''}`}>Denim</a>
                                <a href='#' onClick={() => handleCategoryClick('Office Jackets')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Office Jackets' ? 'font-bold' : ''}`}>Office Jackets</a>
                                <a href='#' onClick={() => handleCategoryClick('Leather Coats')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Leather Coats' ? 'font-bold' : ''}`}>Leather Coats</a>
                                <a href='#' onClick={() => handleCategoryClick('Winter Jackets')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Winter Jackets' ? 'font-bold' : ''}`}>Winter Jackets</a>
                                <a href='#' onClick={() => handleCategoryClick('Bomber Jackets')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Bomber Jackets' ? 'font-bold' : ''}`}>Bomber Jackets</a>
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
                        <a href='#' onClick={() => handleCategoryClick('Bomber Jackets')} className={`text-black hover:underline text-[14px] ${selectedCategory === 'Bomber Jackets' ? 'font-bold' : ''}`}>Bomber Jackets</a>
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

export default JacketsComponent;
