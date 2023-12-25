import CartComponent from '@/components/CartComponent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

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

const Cart = ({ customer }: { customer: Customer }) => {
  return (
    <div className='bg-white'>
      <Navbar />
      <CartComponent customer={customer} />
      <Footer />
    </div>
  );
};

export default Cart;
