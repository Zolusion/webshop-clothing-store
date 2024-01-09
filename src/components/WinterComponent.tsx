"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';
import WinterComponentData from '@/content/WinterComponent.json'


const WinterComponent = () => {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = (e: any, product: any) => {
    dispatch(addItem(product));
    e.preventDefault();
    router.push("/cart");
  };

  return (
    <section className="bg-black">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {WinterComponentData.map((offer, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="group">
                <button className="block aspect-w-4 aspect-h-5 overflow-hidden">
                  <Image
                    src={offer.imageUrl}
                    className="object-cover w-[500px] h-[700px] 2xl:h-[900px] 2xl:w-[1200px] object-center opacity-100 transition-opacity group-hover:opacity-75"
                    alt={`Product ${index + 1}`}
                    width={500}
                    height={700}
                    loading="lazy"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end opacity-0 transition-opacity group-hover:opacity-100 bg-black bg-opacity-50">
                    <p className="text-white text-lg font-bold mb-2 px-4">
                      {offer.productName}
                    </p>
                    <p className="text-white text-right mb-4 px-4">€{offer.price}</p>
                    <a
                      href={"/cart"}
                      onClick={(e) => handleAddToCart(e, offer)}
                      className="text-white bg-black px-4 py-2 w-full"
                    >
                      {offer.button.cart}
                    </a>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WinterComponent