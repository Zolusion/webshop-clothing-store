"use client"
import CartComponent from '@/components/CartComponent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import DiscountSection from '@/components/Sale';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import type { Metadata } from "next";

// const title = "Shopping Cart";

// export const metadata: Metadata = {
//     title: `${title} | Solmaz Fashion`,
// }

// Update the definitions in your Cart component file
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

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
  customer?: Customer;
}

const Cart = ({ params, searchParams, customer }: PageProps) => {
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
    paymentmethod: '',
    orderstatus: '',
    products: [],
    totalprice: 0,
  };

  return (
    <Router>
      <div className='bg-white'>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<CartComponent customer={customer || defaultCustomer} />} />
          <Route path="/cart/sale" element={<DiscountSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Cart;
