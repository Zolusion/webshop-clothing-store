import React from 'react';

const Beauty = () => {
    // Dummy product data array for demonstration
    const products = [
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
    ];

    const imagesMatchingNames = products.map(product => product.imageSrc);

    console.log(imagesMatchingNames);

    return (
        <div className='px-6 p-4 bg-gray-100 shadow-md'>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <input
                        type='text'
                        placeholder='Search products'
                        className='p-2 border border-gray-300 rounded w-[500px] text-black'
                    />
                </div>

                <div className='flex font-bold'>
                    <a href='#' className='mr-6 text-black hover:underline'>Skincare</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Makeup</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Haircare</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Fragrances</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Personal Care</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Body Care</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Gifts</a>
                    <a href='#' className='mr-6 text-black hover:underline'>Home Care</a>
                </div>
            </div>

            <hr className='mb-4' />

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {products.map((product) => (
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
