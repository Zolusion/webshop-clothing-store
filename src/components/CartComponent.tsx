import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCart {
  productName: string;
  quantity: number;
  totalPrice: number;
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
  postalCode: string;
  paymentmethod: string;
  products: ProductCart[];
}

const calculateTotalPrice = (products: ProductCart[] | undefined, vatRate: number) => {
  if (!products) {
    return {
      vatAmount: '0.00',
      totalPriceWithVat: '0.00',
    };
  }

  const totalPriceWithoutVat = products.reduce((total, product) => total + product.quantity * product.totalPrice, 0);
  const vatAmount = totalPriceWithoutVat * (vatRate / 100);
  const totalPriceWithVat = totalPriceWithoutVat + vatAmount;

  return {
    totalPriceWithoutVat: totalPriceWithoutVat.toFixed(2),
    vatAmount: vatAmount.toFixed(2),
    totalPriceWithVat: totalPriceWithVat.toFixed(2),
  };
};

const CartComponent: React.FC<{ customer?: Customer }> = ({ customer }) => {
  const defaultCustomer: Customer = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    postalCode: '',
    paymentmethod: 'IDEAL',
    products: [],
  };

  const initialFormData = {
    ...defaultCustomer,
    ...(customer ?? {}),
  };

  const [formData, setFormData] = useState<Customer>(initialFormData);
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
  const total = calculateTotalPrice(customer?.products, vatRate);

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
    customer?.products,
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
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='John'
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
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='Doe'
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
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='N9Y9z@example.com'
            />
            {formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone' className='text-black'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='123-456-7890'
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
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='123 Main St'
            />
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
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='New York'
            />
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
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='USA'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='postalCode' className='text-black'>
              Postal Code
            </label>
            <input
              type='text'
              id='postalCode'
              name='postalCode'
              value={formData.postalCode}
              onChange={handleInputChange}
              className='border border-gray-300 p-2 rounded-md text-black'
              placeholder='12345'
            />
          </div>
        </form>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-2 text-black'>Order Details</h3>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse border border-gray-300 text-black'>
            <thead className='bg-gray-200'>
              <tr className='border border-gray-300'>
                <th className='text-black'>Product</th>
                <th className='text-black'>Quantity</th>
                <th className='text-black'>Price</th>
              </tr>
            </thead>
            <tbody>
              {customer?.products.map((item) => (
                <tr key={item.productName}>
                  <td className='text-black'>{item.productName}</td>
                  <td className='text-black'>{item.quantity}</td>
                  <td className='text-black'>{item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='font-semibold text-black'>VAT (21%): ${vatAmount}</p>
        <p className='font-semibold mb-4 text-black'>Total Price: ${totalPriceWithVat}</p>
        <div className='flex'>
          <button
            type='submit'
            className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800'
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
