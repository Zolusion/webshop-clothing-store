"use client";
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

const Beauty = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        // Filter products based on the selected category
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const products: Product[] = [
        {
            id: 1,
            name: 'MAC Brush',
            description: 'Achieve flawless makeup application with the high-quality MAC Brush. It is lightweight and easy to use.',
            brand: 'MAC',
            price: 22.99,
            imageSrc: 'https://images.unsplash.com/photo-1637834700149-23d782334f8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Makeup',
        },
        {
            id: 2,
            name: 'Springy peeling gel',
            description: 'Revitalize your skin with the Springy Peeling Gel, a gentle yet effective solution for removing stubborn impurities.',
            brand: 'Springy',
            price: 14.95,
            imageSrc: 'https://images.unsplash.com/photo-1613638082033-4cc49feef601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvc21ldGljfGVufDB8fDB8fHww',
            category: 'Skincare',
        },
        {
            id: 3,
            name: 'Nora Eczema',
            description: 'Combat eczema with Nora Eczema, a targeted treatment designed to soothe and heal irritated skin.',
            brand: 'Nora',
            price: 8.99,
            imageSrc: 'https://images.unsplash.com/photo-1614858818552-326117cd36b0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Skincare',
        },
        {
            id: 4,
            name: 'Revitalizing Face Mask',
            description: 'Treat your skin to the ultimate refreshment with our Revitalizing Face Mask, leaving your skin glowing and rejuvenated.',
            brand: 'Glowy',
            price: 12.99,
            imageSrc: 'https://i.pinimg.com/564x/65/a4/42/65a4427ccc0d76f719eace13560762a2.jpg',
            category: 'Skincare',
        },
        {
            id: 5,
            name: 'Rose Infused Toner',
            description: 'Experience the soothing effects of our Rose-Infused Toner, leaving your skin feeling refreshed and delicately scented.',
            brand: 'Blossom',
            price: 9.95,
            imageSrc: 'https://i.pinimg.com/474x/21/a2/49/21a24925bba2a70f04953351795ce2b1.jpg',
            category: 'Skincare',
        },
        {
            id: 6,
            name: 'Lavender Bath Bombs',
            description: 'Relax and unwind with the calming scent of Lavender Bath Bombs, providing a luxurious and soothing bath experience.',
            brand: 'Tranquil',
            price: 7.99,
            imageSrc: 'https://i.pinimg.com/564x/02/3a/6f/023a6f88cba806fd55107b7d1c1f2c12.jpg',
            category: 'Home Care',
        },
        {
            id: 7,
            name: 'Gold Infused Eye Cream',
            description: 'Achieve a radiant look with our Gold-Infused Eye Cream, designed to reduce puffiness and revitalize the delicate eye area.',
            brand: 'Radiance',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/564x/77/08/71/770871b677ec2ff4d336576afb419619.jpg',
            category: 'Skincare',
        },
        {
            id: 8,
            name: 'Coconut Milk Shampoo',
            description: 'Nourish your hair with the goodness of Coconut Milk Shampoo, leaving your locks feeling soft, silky, and deeply moisturized.',
            brand: 'PureLocks',
            price: 15.99,
            imageSrc: 'https://i.pinimg.com/474x/38/09/0c/38090c84c48fddbce95db38598a4d43a.jpg',
            category: 'Haircare',
        },
        {
            id: 9,
            name: 'Cherry Blossom Perfume',
            description: 'Embrace the floral notes of Cherry Blossom with our exquisite perfume, leaving you with a captivating and long-lasting fragrance.',
            brand: 'FragranceAura',
            price: 24.99,
            imageSrc: 'https://i.pinimg.com/474x/0b/10/31/0b10317a4d4976fc5dda9f93511af5c4.jpg',
            category: 'Fragrances',
        },
        {
            id: 10,
            name: 'Charcoal Detox Mask',
            description: 'Purify your skin with the deep-cleansing power of the Charcoal Detox Mask, removing impurities and promoting a clear complexion.',
            brand: 'Detoxify',
            price: 16.99,
            imageSrc: 'https://i.pinimg.com/474x/2b/4b/ca/2b4bcac4876eb4da6d4418bd9721fd93.jpg',
            category: 'Skincare',
        },
        {
            id: 11,
            name: 'Argan Oil Hair Serum',
            description: 'Transform and nourish your hair with our luxurious Argan Oil Hair Serum, leaving your locks smooth, shiny, and irresistibly touchable.',
            brand: 'SilkLocks',
            price: 13.99,
            imageSrc: 'https://i.pinimg.com/474x/63/25/48/63254814ed0dd2a0c501914f79d8b94a.jpg',
            category: 'Haircare',
        },
        {
            id: 12,
            name: 'Jasmine Scented Candle',
            description: 'Create a relaxing ambiance with the soothing aroma of our Jasmine Scented Candle, perfect for unwinding after a long day.',
            brand: 'Tranquility',
            price: 10.59,
            imageSrc: 'https://i.pinimg.com/474x/53/fb/b3/53fbb3c9ceaf6bd3856cfd4d6c9fe3db.jpg',
            category: 'Home Care',
        },
        {
            id: 13,
            name: 'Lash Sensational',
            description: 'Make your lashes sensational with our luxury Lash Mascara, providing volume, length, and a captivating gaze.',
            brand: 'Maybellin',
            price: 9.99,
            imageSrc: 'https://i.pinimg.com/474x/b1/61/e0/b161e01be1ab392e5d6f9295c5e49e82.jpg',
            category: 'Makeup',
        },
        {
            id: 14,
            name: 'Rare Beauty',
            description: 'Achieve a dry and refreshed look with our luxury Mascara from The Every Girl collection, defining your lashes with precision.',
            brand: 'The Every Girl',
            price: 14.99,
            imageSrc: 'https://i.pinimg.com/474x/2b/89/41/2b89417ec6b317202604f1f74947d1b3.jpg',
            category: 'Makeup',
        },
        {
            id: 15,
            name: 'Sheglam Color Bloom',
            description: 'Add a cheerful blush with our luxury Sheglam Color Bloom makeup, perfect for enhancing your natural radiance.',
            brand: 'Sheglam',
            price: 10.59,
            imageSrc: 'https://i.pinimg.com/564x/e5/1c/6f/e51c6f3933be8e6d784f1cd405c8331d.jpg',
            category: 'Makeup',
        },
        {
            id: 16,
            name: 'Maybelline Lash Sensational',
            description: 'Reach new heights with our luxury Lash Mascara from Maybelline, providing sky-high volume and definition.',
            brand: 'Maybelline',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/564x/36/e2/ac/36e2aca5b212db51a1fd97b3ae4f97d7.jpg',
            category: 'Makeup',
        },
        {
            id: 17,
            name: 'Elf Power Grip Primer',
            description: 'Power up your makeup routine with our exclusive Elf Power Grip Primer, creating the perfect base for a long-lasting look.',
            brand: 'Elf',
            price: 14.99,
            imageSrc: 'https://i.pinimg.com/564x/3a/58/b5/3a58b5ba74a150824211fc4329767b70.jpg',
            category: 'Makeup',
        },
        {
            id: 18,
            name: 'Glowgasm Calm Glow',
            description: 'Experience calm and invigoration with our exclusive Glowgasm Calm Glow product, enhancing your natural radiance.',
            brand: 'Glowgasm',
            price: 9.99,
            imageSrc: 'https://i.pinimg.com/564x/90/4e/df/904edf2bf33b7fda6e03391da9e5ec90.jpg',
            category: 'Makeup',
        },
        {
            id: 19,
            name: 'Fenty Beauty Liquid Liner',
            description: 'Meet all your makeup needs with our exclusive Fenty Beauty Liquid Liner, providing precise lines and bold definition.',
            brand: 'Fenty',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/564x/69/7b/d0/697bd004cf4fcc183edf0e1dda9ce2d2.jpg',
            category: 'Makeup',
        },
        {
            id: 20,
            name: 'Lancome Teint Vissionaire',
            description: 'Enhance your beauty routine with our exclusive Lancome Teint Vissionaire, offering versatile solutions for all your makeup needs.',
            brand: 'Lancome',
            price: 14.99,
            imageSrc: 'https://i.pinimg.com/564x/39/c9/88/39c988b020d03d317730c8feaa5ed633.jpg',
            category: 'Makeup',
        },
        {
            id: 21,
            name: 'Scalp Massager',
            description: 'Indulge in a soothing scalp massage with our exclusive Scalp Massager, promoting relaxation and improved scalp health.',
            brand: 'Scalp Massager',
            price: 5.99,
            imageSrc: 'https://i.pinimg.com/564x/0d/47/ee/0d47eeca8d3e49d2640dfd3fd282ce3c.jpg',
            category: 'Skincare',
        },
        {
            id: 22,
            name: 'Deep Moist Shampoo',
            description: 'Experience deep moisturization for your hair with our exclusive Deep Moist Shampoo, leaving your locks soft, smooth, and hydrated.',
            brand: 'Deep Moist Shampoo',
            price: 4.99,
            imageSrc: 'https://i.pinimg.com/564x/e5/27/65/e527652756c1cb825e8d47008f6466bc.jpg',
            category: 'Haircare',
        },
        {
            id: 23,
            name: 'K18 Hair mask',
            description: 'Treat your hair to a molecular hair mask with K18, providing intense softness and moisture for a healthy, luxurious look.',
            brand: 'Scalp Massager',
            price: 7.99,
            imageSrc: 'https://i.pinimg.com/564x/ad/0d/7d/ad0d7dc7e479271828d65e4837931271.jpg',
            category: 'Haircare',
        },
        {
            id: 24,
            name: 'Hydrating Facial Mist',
            description: 'Revitalize your skin with our exclusive Hydrating Facial Mist, providing a burst of moisture for a radiant and refreshed complexion.',
            brand: 'La Reveuse',
            price: 6.99,
            imageSrc: 'https://i.pinimg.com/564x/48/92/9c/48929cd866a48db79d92c8112c285c63.jpg',
            category: 'Skincare',
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
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <input
                        type='text'
                        placeholder='Search products'
                        className='p-2 border border-gray-300 w-[500px] text-black border-none bg-none rounded-md'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                        className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md'
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                <div className='flex font-bold'>
                    <a href='#' onClick={() => handleCategoryClick('Skincare')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Skincare' ? 'font-bold' : ''}`}>Skincare</a>
                    <a href='#' onClick={() => handleCategoryClick('Makeup')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Makeup' ? 'font-bold' : ''}`}>Makeup</a>
                    <a href='#' onClick={() => handleCategoryClick('Haircare')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Haircare' ? 'font-bold' : ''}`}>Haircare</a>
                    <a href='#' onClick={() => handleCategoryClick('Fragrances')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Fragrances' ? 'font-bold' : ''}`}>Fragrances</a>
                    <a href='#' onClick={() => handleCategoryClick('Personal Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Personal Care' ? 'font-bold' : ''}`}>Personal Care</a>
                    <a href='#' onClick={() => handleCategoryClick('Body Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Body Care' ? 'font-bold' : ''}`}>Body Care</a>
                    <a href='#' onClick={() => handleCategoryClick('Gifts')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Gifts' ? 'font-bold' : ''}`}>Gifts</a>
                    <a href='#' onClick={() => handleCategoryClick('Home Care')} className={`mr-6 text-black hover:underline text-[14px] ${selectedCategory === 'Home Care' ? 'font-bold' : ''}`}>Home Care</a>
                </div>
            </div>

            <hr className='mb-4' />

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {(searchQuery ? filteredProducts : products).map((product) => (
                    <div key={product.id} className={`mb-8 ${selectedCategory && product.category !== selectedCategory ? 'hidden' : ''}`}>
                        <img
                            src={product.imageSrc}
                            alt={product.name}
                            className='w-[500px] h-[500px] object-cover rounded-md mb-4'
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
                                    <button className='text-black hover:underline transition duration-300 mr-4'>
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

export default Beauty;
