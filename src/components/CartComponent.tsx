"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCart {
    image: string;
    productname: string;
    price: number;
    quantity: number;
    totalprice: number;
}

interface Customer {
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    paymentmethod: string;
    orderstatus: string;
    products: ProductCart[];
    totalprice: number;
}

const calculateTotalPrice = (products: ProductCart[], vatRate: number) => {
    const totalPriceWithoutVat = products.reduce((total, product) => total + product.totalprice, 0);
    const vatAmount = totalPriceWithoutVat * (vatRate / 100);
    const totalPriceWithVat = totalPriceWithoutVat + vatAmount;

    return {
        totalPriceWithoutVat: totalPriceWithoutVat.toFixed(2),
        vatAmount: vatAmount.toFixed(2),
        totalPriceWithVat: totalPriceWithVat.toFixed(2),
    };
};

const CartComponent: React.FC<{ customer?: Customer }> = ({ customer }) => {
    if (!customer) {
        return (
            <div className='p-8'>
                <h2 className='text-2xl font-semibold mb-4 text-black'>Shopping Cart</h2>
                <div className='bg-gray-100 p-4 rounded-md mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
                    <p className='text-lg text-center text-gray-500'>Your cart is empty.</p>
                </div>
                <div className='bg-white mt-4'>
                    <h2 className='text-2xl font-semibold mb-4 text-black'>Recommanded Products</h2>
                    <div className='rounded-md mx-auto'>
                        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                            <div>
                                <div className='relative h-64'>
                                    <Image
                                        className='w-full h-full object-cover'
                                        src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                        alt='Product Image'
                                        fill
                                    />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-black'>Product Name</h3>
                                    <p className='text-gray-500'>Description</p>
                                </div>
                            </div>
                            <div>
                                <div className='relative h-64'>
                                    <Image
                                        className='w-full h-full object-cover'
                                        src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                        alt='Product Image'
                                        fill
                                    />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-black'>Product Name</h3>
                                    <p className='text-gray-500'>Description</p>
                                </div>
                            </div>
                            <div>
                                <div className='relative h-64'>
                                    <Image
                                        className='w-full h-full object-cover'
                                        src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                        alt='Product Image'
                                        fill
                                    />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-black'>Product Name</h3>
                                    <p className='text-gray-500'>Description</p>
                                </div>
                            </div>
                            <div>
                                <div className='relative h-64'>
                                    <Image
                                        className='w-full h-full object-cover'
                                        src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                                        alt='Product Image'
                                        fill
                                    />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-black'>Product Name</h3>
                                    <p className='text-gray-500'>Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const [formData, setFormData] = useState<Customer>({
        name: customer?.name || '',
        surname: customer?.surname || '',
        email: customer?.email || '',
        phone: customer?.phone || '',
        address: customer?.address || '',
        city: customer?.city || '',
        state: customer?.state || '',
        zip: customer?.zip || '',
        country: customer?.country || '',
        paymentmethod: 'IDEAL',
        orderstatus: customer?.orderstatus || '',
        products: customer?.products || [],
        totalprice: customer?.totalprice || 0,
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

    const paymentMethods = ['IDEAL', 'Credit Card', 'PayPal', 'Bank Transfer', 'BanContact'];
    const vatRate = 21;
    const total = calculateTotalPrice(customer.products, vatRate);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errors: { [key: string]: string } = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.surname.trim()) {
            errors.surname = 'Surname is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) {
            errors.phone = 'Phone is required';
        }

        setFormErrors(errors as any);

        if (Object.keys(errors).length > 0) {
            console.log('Form has errors:', errors);
        } else {
            console.log('Form submitted successfully:', formData);
        }
    };

    const { totalPriceWithoutVat, vatAmount, totalPriceWithVat } = calculateTotalPrice(
        customer.products,
        vatRate
    );

    return (
        <div className='bg-white p-8 rounded-md shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-black'>Shopping Cart</h2>
            <div className='mb-6'>
                <form className='grid grid-cols-1 sm:grid-cols-2 gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='text-black'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.name && <p className='text-red-500'>{formErrors.name}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='surname' className='text-black'>
                            Surname
                        </label>
                        <input
                            type='text'
                            id='surname'
                            name='surname'
                            value={formData.surname}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.surname && <p className='text-red-500'>{formErrors.surname}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='text-black'>
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='phone' className='text-black'>
                            Phone
                        </label>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.phone && <p className='text-red-500'>{formErrors.phone}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='address' className='text-black'>
                            Address
                        </label>
                        <input
                            type='text'
                            id='address'
                            name='address'
                            value={formData.address}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.address && <p className='text-red-500'>{formErrors.address}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='city' className='text-black'>
                            City
                        </label>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            value={formData.city}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.city && <p className='text-red-500'>{formErrors.city}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='zipCode' className='text-black'>
                            Zip Code
                        </label>
                        <input
                            type='text'
                            id='zipCode'
                            name='zipCode'
                            value={formData.zip}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.zip && <p className='text-red-500'>{formErrors.zip}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='country' className='text-black'>
                            Country
                        </label>
                        <input
                            type='text'
                            id='country'
                            name='country'
                            value={formData.country}
                            onChange={handleInputChange}
                            className='border border-gray-300 p-2 rounded-md'
                        />
                        {formErrors.country && <p className='text-red-500'>{formErrors.country}</p>}
                    </div>
                </form>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-2 text-black'>Order Details</h3>
                <p className='font-semibold mb-2 text-black'>Order Status: {customer.orderstatus}</p>
                <div className='overflow-x-auto'>
                    <table className='min-w-full'>
                        <thead>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2'>Product</th>
                                <th className='border border-gray-300 px-4 py-2'>Quantity</th>
                                <th className='border border-gray-300 px-4 py-2'>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customer.products.map((product) => (
                                <tr key={product.productname}>
                                    <td className='border border-gray-300 px-4 py-2'>{product.productname}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{product.quantity}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className='font-semibold mt-4 text-black'>Total Price (Excluding VAT): ${totalPriceWithoutVat}</p>
                <p className='font-semibold text-black'>VAT (21%): ${vatAmount}</p>
                <p className='font-semibold mb-4 text-black'>Total Price (Including VAT): ${totalPriceWithVat}</p>
            </div>
        </div>
    );
};

export default CartComponent;
