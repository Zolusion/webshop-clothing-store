"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addItem, removeItem } from "@/store/cart/cartSlice";
import { useDispatch } from "react-redux";

interface Product {
  id: string;
  name: string;
  imageSrc: string;
  href: string;
  color: string;
  price: number;
  imageUrl: string;
  productName: string;
  description: string;
  quantity: number;
}


const WishlistComponent = () => {
  const { wishlist = [], wishlistItems = [] } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const removeFromWishlist = (id: string) => {
    dispatch(removeItem(id));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Wishlist</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {wishlist && wishlist.map((product: Product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  width={500}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistComponent;
