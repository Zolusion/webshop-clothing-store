import ShoppingCartItems from '@/components/ShoppingcartItems';
import React from 'react';
import type { Metadata } from "next";

const title = "Shopping Cart";

export const metadata: Metadata = {
    title: `${title} | Solmaz Fashion`,
}

export default async function Cart() {
    // const carts = await getData();
    return (
        <div className='bg-white'>
            {/* CartItems={carts.data} */}
            <ShoppingCartItems />
        </div>
    );
};

// async function getData() {
//   const res = await fetch("https://solmazadmin.com/api/cart");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }