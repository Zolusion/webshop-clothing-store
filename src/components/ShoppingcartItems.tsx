"use client";
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

// export type CartItems = {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//     image: string;
// }[];

const ShoppingCartItems = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerCountry, setCustomerCountry] = useState('');
    const [customerZipCode, setCustomerZipCode] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            quantity: 1,
            image: '/solmaznur-images/solmaznur24.jpeg',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 1,
            image: '/solmaznur-images/solmaznur25.jpeg',
        },
    ]);

    const [recommendedProducts, setRecommendedProducts] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: '/solmaznur-images/solmaznur24.jpeg',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 39.99,
            image: '/solmaznur-images/solmaznur25.jpeg',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 9.99,
            image: '/solmaznur-images/solmaznur2.jpg',
        }
    ]);

    const calculateSubtotal = (item: { price: number; quantity: number }) => {
        return (item.price * item.quantity).toFixed(2);
    };

    const calculateTotalPrice = () => {
        const netherlandsVATRate = 0.21;
        const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        const totalTax = cartItems.reduce((total, item) => total + item.price * item.quantity * netherlandsVATRate, 0);
        const total = subtotal + totalTax;
        return total.toFixed(2);
    };

    const handleDelete = (itemId: number) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const customerFeedback = [
        {
            id: 1,
            name: 'Customer 1',
            rating: 5,
            comment: 'Excellent service and fast delivery. Highly recommended!',
            image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 2,
            name: 'Customer 2',
            rating: 4,
            comment: 'Great products, but delivery took a bit longer than expected.',
            image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            id: 3,
            name: 'Customer 3',
            rating: 4,
            comment: 'Great products, but delivery took a bit longer than expected.',
            image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
    ];

    return (
        <div>
            <div className='bg-white p-8 max-w-7xl 2xl:max-w-[1800px] mx-auto px-6'>
                <h2 className='text-3xl font-bold mb-6 text-gray-800 mt-4'>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p className='text-gray-600'>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className='border-b border-gray-200 py-4 flex items-center'>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className='w-20 h-20 object-cover rounded mr-4'
                                    width={80}
                                    height={80}
                                    quality={100}
                                    unoptimized
                                    priority
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className='flex flex-col'>
                                    <span className='font-bold text-gray-800'>{item.name}</span>
                                    <span className='text-gray-500'>€{item.price.toFixed(2)}</span>
                                </div>
                                <div className='flex items-center ml-auto'>
                                    <span className='mr-2 text-gray-800'>Quantity:</span>
                                    <input
                                        type='number'
                                        min='1'
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value, 10);
                                            const updatedCart = cartItems.map((cartItem) =>
                                                cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
                                            );
                                            setCartItems(updatedCart);
                                        }}
                                        className='w-12 px-2 py-1 border border-gray-300 rounded text-gray-800'
                                    />
                                    <button
                                        className='ml-4 text-red-600 hover:text-red-800'
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='mt-6'>
                            <div className='flex items-center mb-4 mt-4'>
                                <table className='table-auto w-full'>
                                    <tbody className='grid grid-cols-3 2xl:grid-cols-4 gap-4 text-gray-800'>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Name:</td>
                                            <input placeholder='Enter your name' type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Email:</td>
                                            <input placeholder='Enter your email' type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Phone:</td>
                                            <input placeholder='Enter your phone number' type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Address:</td>
                                            <input placeholder='Enter your address' type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>City:</td>
                                            <input placeholder='Enter your city' type="text" value={customerCity} onChange={(e) => setCustomerCity(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Country:</td>
                                            <input placeholder='Enter your country' type="text" value={customerCountry} onChange={(e) => setCustomerCountry(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Zip Code:</td>
                                            <input placeholder='Enter your zip code' type="text" value={customerZipCode} onChange={(e) => setCustomerZipCode(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Shipping Method:</td>
                                            <input placeholder='Enter your shipping method' type="text" value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr>
                                            <td className='text-gray-800 font-bold'>Payment Method:</td>
                                            <input placeholder='Enter your payment method' type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className='text-gray-600 border border-gray-300 rounded px-2 py-1' />
                                        </tr>
                                        <tr className='flex flex-col justify-center'>
                                            <td className='text-gray-800 font-bold'>Shipping Cost:</td>
                                            €{(parseFloat(calculateTotalPrice()) - parseFloat(calculateSubtotal(cartItems[0]))).toFixed(2)}
                                        </tr>
                                        <tr className='flex flex-col justify-center'>
                                            <td className='text-gray-800 font-bold'>Total:</td>
                                            €{calculateTotalPrice()}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600'>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
                <div className='bg-white mt-4 rounded-lg'>
                    <div className='relative'>
                        <h3 className='text-2xl font-bold text-gray-800'>Recommended Products</h3>
                    </div>
                    <div className='mt-8 mx-auto max-w-7xl 2xl:max-w-[1800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {recommendedProducts.map((product) => (
                            <div key={product.id} className='flex flex-col mb-4'>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className='w-full h-full mr-4'
                                    width={64}
                                    height={64}
                                    quality={100}
                                    unoptimized
                                    loading='lazy'
                                    style={{ objectFit: 'cover' }}
                                />
                                <div>
                                    <div className='flex justify-between mt-2'>
                                        <h3 className='text-lg font-bold text-gray-800'>{product.name}</h3>
                                        <span className='text-lg font-bold text-gray-800'>€{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-black p-4 mt-4 rounded-lg'>
                    <div className='relative'>
                        <h3 className='text-2xl font-bold text-white'>Customer Feedback</h3>
                    </div>
                    <div className='mt-8 mx-auto max-w-7xl 2xl:max-w-[1800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {customerFeedback.map((feedback) => (
                            <div key={feedback.id} className='flex items-center mb-4'>
                                <Image
                                    src={feedback.image}
                                    alt={feedback.name}
                                    className='w-20 h-20 rounded-full mr-4'
                                    width={64}
                                    height={64}
                                    quality={100}
                                    unoptimized
                                    loading='lazy'
                                    style={{ objectFit: 'cover' }}
                                />
                                <div>
                                    <div>
                                        <h3 className='text-lg font-bold text-white'>{feedback.name}</h3>
                                        <p className='text-white max-w-[270px] mb-1'>{feedback.comment}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        {Array.from({ length: feedback.rating }, (_, index) => (
                                            <svg
                                                key={index}
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='16'
                                                height='16'
                                                fill='currentColor'
                                                className='bi bi-star-fill text-yellow-500'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItems