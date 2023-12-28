"use client";
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    imageSrc: string;
}

const Beauty = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    // Dummy product data array for demonstration
    const products: Product[] = [
        {
            id: 1,
            name: 'MAC Brush',
            description: 'Nothing is more beautiful than a good brush.',
            brand: 'MAC',
            price: 22.99,
            imageSrc: 'https://images.unsplash.com/photo-1637834700149-23d782334f8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            name: 'Springy peeling gel',
            description: 'A gel that helps you peel away stubborn skin.',
            brand: 'Springy',
            price: 14.95,
            imageSrc: 'https://images.unsplash.com/photo-1613638082033-4cc49feef601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvc21ldGljfGVufDB8fDB8fHww',
        },
        {
            id: 3,
            name: 'Nora Eczema',
            description: 'A treatment that helps you deal with eczema.  ',
            brand: 'Nora',
            price: 8.99,
            imageSrc: 'https://images.unsplash.com/photo-1614858818552-326117cd36b0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 4,
            name: 'Revitalizing Face Mask',
            description: 'Give your skin a boost with our refreshing face mask.',
            brand: 'Glowy',
            price: 12.99,
            imageSrc: 'https://i.pinimg.com/564x/65/a4/42/65a4427ccc0d76f719eace13560762a2.jpg',
        },
        {
            id: 5,
            name: 'Rose Infused Toner',
            description: 'Experience the soothing effects of our rose-infused toner.',
            brand: 'Blossom',
            price: 9.95,
            imageSrc: 'https://i.pinimg.com/474x/21/a2/49/21a24925bba2a70f04953351795ce2b1.jpg',
        },
        {
            id: 6,
            name: 'Lavender Bath Bombs',
            description: 'Relax and unwind with the calming scent of lavender bath bombs.',
            brand: 'Tranquil',
            price: 7.99,
            imageSrc: 'https://i.pinimg.com/564x/02/3a/6f/023a6f88cba806fd55107b7d1c1f2c12.jpg',
        },
        {
            id: 7,
            name: 'Gold Infused Eye Cream',
            description: 'Achieve a radiant look with our gold-infused eye cream.',
            brand: 'Radiance',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/564x/77/08/71/770871b677ec2ff4d336576afb419619.jpg',
        },
        {
            id: 8,
            name: 'Coconut Milk Shampoo',
            description: 'Nourish your hair with the goodness of coconut milk shampoo.',
            brand: 'PureLocks',
            price: 15.99,
            imageSrc: 'https://i.pinimg.com/474x/38/09/0c/38090c84c48fddbce95db38598a4d43a.jpg',
        },
        {
            id: 9,
            name: 'Cherry Blossom Perfume',
            description: 'Embrace the floral notes of cherry blossom with our exquisite perfume.',
            brand: 'FragranceAura',
            price: 24.99,
            imageSrc: 'https://i.pinimg.com/474x/0b/10/31/0b10317a4d4976fc5dda9f93511af5c4.jpg',
        },
        {
            id: 10,
            name: 'Charcoal Detox Mask',
            description: 'Purify your skin with the deep-cleansing power of charcoal.',
            brand: 'Detoxify',
            price: 16.99,
            imageSrc: 'https://i.pinimg.com/474x/2b/4b/ca/2b4bcac4876eb4da6d4418bd9721fd93.jpg',
        },
        {
            id: 11,
            name: 'Argan Oil Hair Serum',
            description: 'Transform and nourish your hair with our luxurious argan oil serum.',
            brand: 'SilkLocks',
            price: 13.99,
            imageSrc: 'https://i.pinimg.com/474x/63/25/48/63254814ed0dd2a0c501914f79d8b94a.jpg',
        },
        {
            id: 12,
            name: 'Jasmine Scented Candle',
            description: 'Create a relaxing ambiance with the soothing aroma of jasmine.',
            brand: 'Tranquility',
            price: 10.59,
            imageSrc: 'https://i.pinimg.com/474x/53/fb/b3/53fbb3c9ceaf6bd3856cfd4d6c9fe3db.jpg',
        },
        {
            id: 13,
            name: 'Lash Sensational',
            description: 'Lashes sensational with our luxury lash mascara.',
            brand: 'Maybellin',
            price: 9.99,
            imageSrc: 'https://i.pinimg.com/474x/b1/61/e0/b161e01be1ab392e5d6f9295c5e49e82.jpg',
        },
        {
            id: 14,
            name: 'Rare Beauty',
            description: 'Mascara for a dry and refreshed look with our luxury mascara.',
            brand: 'The Every Girl',
            price: 14.99,
            imageSrc: 'https://i.pinimg.com/474x/2b/89/41/2b89417ec6b317202604f1f74947d1b3.jpg',
        },
        {
            id: 15,
            name: 'Sheglam Color Bloom',
            description: 'Blush make up for cheers with our luxury sheglam color bloom.',
            brand: 'Sheglam',
            price: 10.59,
            imageSrc: 'https://i.pinimg.com/564x/e5/1c/6f/e51c6f3933be8e6d784f1cd405c8331d.jpg',
        },
        {
            id: 16,
            name: 'Maybelline Lash Sensational',
            description: 'Sky high with our luxury lash mascara with Maybelline. ',
            brand: 'Maybelline',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/564x/36/e2/ac/36e2aca5b212db51a1fd97b3ae4f97d7.jpg',
        },
        {
            id: 17,
            name: 'Elf Power Grip Primer',
            description: 'Power up your makeup with our exclusive Elf Power Grip Primer.',
            brand: 'Elf',
            price: 14.99,
            imageSrc: 'https://i.pinimg.com/564x/3a/58/b5/3a58b5ba74a150824211fc4329767b70.jpg',
        },
        // Glowgasm
        {
            id: 18,
            name: 'Glowgasm Calm Glow',
            description: 'Calm and invigorating with our exclusive Calm Glow.',
            brand: 'Glowgasm',
            price: 9.99,
            imageSrc: 'https://i.pinimg.com/564x/90/4e/df/904edf2bf33b7fda6e03391da9e5ec90.jpg',
        },
        // Fenty beauty liquid liner 
        {
            id: 19,
            name: 'Fenty Beauty Liquid Liner',
            description: 'Liquid liner for all your makeup needs with our exclusive Fenty Beauty Liquid Liner. ',
            brand: 'Fenty',
            price: 18.99,
            imageSrc: 'https://i.pinimg.com/564x/69/7b/d0/697bd004cf4fcc183edf0e1dda9ce2d2.jpg',
        },
        // Lancome teint vissionaire 
        {
            id: 20,
            name: 'Lancome Teint Vissionaire',
            description: 'Teint vissionaire for all your makeup needs with our exclusive Lancome Teint Vissionaire. ',
            brand: 'Lancome',
            price: 14.99,
            imageSrc: 'https://i.pinimg.com/564x/39/c9/88/39c988b020d03d317730c8feaa5ed633.jpg',
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
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Skincare</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Makeup</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Haircare</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Fragrances</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Personal Care</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Body Care</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Gifts</a>
                    <a href='#' className='mr-6 text-black hover:underline text-[14px]'>Home Care</a>
                </div>
            </div>

            <hr className='mb-4' />

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {(searchQuery ? filteredProducts : products).map((product) => (
                    <div key={product.id} className='mb-8'>
                        <img
                            src={product.imageSrc}
                            alt={product.name}
                            className='w-[500px] h-[500px] object-cover rounded-md mb-4'
                            loading='lazy'
                            width={500}
                            height={500}
                        />

                        <div>
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
