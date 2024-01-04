"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const specialOffers = [
  {
    id: 1,
    imageUrl: "/blazer/blazer5.png",
    productName: "Royal Plum",
    price: 39.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 2,
    imageUrl: "/blazer/blazer11.png",
    productName: "Ivory Hues",
    price: 47.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 3,
    imageUrl: "/blazer/blazer18.png",
    productName: "Pumpkin Spice",
    price: 18.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1700560970703-82fd3150d5ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxibGF6ZXIlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    productName: "Obsidian",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 5,
    imageUrl: "/blazer/blazer6.png",
    productName: "Mint Chocolate",
    price: 12.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 6,
    imageUrl: "/blazer/blazer16.png",
    productName: "Taupe Tranquility",
    price: 35.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 7,
    imageUrl: "/blazer/blazer7.png",
    productName: "Onyx Obsidian",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 8,
    imageUrl: "/blazer/blazer15.png",
    productName: "Arctic Frost",
    price: 99.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 9,
    imageUrl: "/blazer/blazer10.png",
    productName: "Violet Velvet",
    price: 17.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 10,
    imageUrl: "/blazer/blazer17.png",
    productName: "Steel Gray Blazer",
    price: 69.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 11,
    imageUrl: "/blazer/blazer1.png",
    productName: "Ice Crystal",
    price: 39.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 12,
    imageUrl: "/blazer/blazer4.png",
    productName: "Majestic Grape ",
    price: 14.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 13,
    imageUrl: "/blazer/blazer2.png",
    productName: "Blue Velvet",
    price: 9.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 14,
    imageUrl: "/blazer/blazer8.png",
    productName: "Charcoal Charm",
    price: 19.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 15,
    imageUrl: "/blazer/blazer9.png",
    productName: "Smoky Leather",
    price: 24.95,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 16,
    imageUrl: "/blazer/blazer3.png",
    productName: "Desert Dawn",
    price: 19.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 17,
    imageUrl: "/blazer/blazer14.png",
    productName: "Pearl Essence",
    price: 35.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 18,
    imageUrl: "/blazer/blazer12.png",
    productName: "Pink Champagne",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 19,
    imageUrl: "/blazer/blazer19.png",
    productName: "Grapevine Glamour",
    price: 39.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: 20,
    imageUrl: "/blazer/blazer13.png",
    productName: "Heavenly Blue",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  }
]

const BlazerSale = () => {

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
          {specialOffers.map((offer, index) => (
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

export default BlazerSale