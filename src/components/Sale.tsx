// DiscountSection.js

import Image from "next/legacy/image";
import React from "react";

const specialOffers = [
  {
    imageUrl: "/image6.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "20%",
    oldPrice: "€49.99",
    newPrice: "€39.99",
  },
  {
    imageUrl: "/image7.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "31%",
    oldPrice: "€69.95",
    newPrice: "€47.99",
  },
  {
    imageUrl: "/image22.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "36%",
    oldPrice: "€29.95",
    newPrice: "€18.99",
  },
  {
    imageUrl: "/image8.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "25%",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "/image9.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "28%",
    oldPrice: "€17.95",
    newPrice: "€12.99",
  },
  {
    imageUrl: "/image10.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "40%",
    oldPrice: "€59.95",
    newPrice: "€35.99",
  },
  {
    imageUrl: "/image11.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "25%",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "/image12.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "17%",
    oldPrice: "€119.95",
    newPrice: "€99.99",
  },
  {
    imageUrl: "/image13.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "36%",
    oldPrice: "€27.95",
    newPrice: "€17.99",
  },
  {
    imageUrl: "/image14.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "22%",
    oldPrice: "€89.95",
    newPrice: "€69.99",
  },
  {
    imageUrl: "/image15.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "17%",
    oldPrice: "€47.95",
    newPrice: "€39.99",
  },
  {
    imageUrl: "/image16.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "47%",
    oldPrice: "€27.95",
    newPrice: "€14.99",
  },
  {
    imageUrl: "/image17.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "50%",
    oldPrice: "€19.95",
    newPrice: "€9.99",
  },
  {
    imageUrl: "/image18.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "23%",
    oldPrice: "€25.95",
    newPrice: "€19.99",
  },
  {
    imageUrl: "/image19.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "22%",
    oldPrice: "€31.99",
    newPrice: "€24.95",
  },
  {
    imageUrl: "/image20.jpg",
    name: "Product Name",
    description: "Product description goes here.",
    discount: "28%",
    oldPrice: "€27.95",
    newPrice: "€19.99",
  }
]

const DiscountSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-7xl lg:max-w-[2200px]">
        <h2 className="text-3xl font-bold text-black mb-8 2xl:text-5xl">
          Special Offers
        </h2>
        <div className="flex space-x-4 md:p-0 md:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <div className="relative">
                  <Image
                    src={offer.imageUrl}
                    alt="Product Image"
                    className="w-full h-full object-cover rounded"
                    width={500}
                    height={700}
                  />
                  <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr 2xl:text-2xl">
                    {offer.discount}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-black 2xl:text-2xl">
                    {offer.name}
                  </h3>
                  <p className="text-gray-600 2xl:text-lg">{offer.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <button name="add-to-cart" className="bg-black text-white py-2 px-4 2xl:text-lg">
                      Add To Cart
                    </button>
                    <span className="text-black font-semibold 2xl:text-2xl">
                      {offer.newPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
