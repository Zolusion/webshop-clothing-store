// DiscountSection.js

import Image from "next/image";
import React from "react";

const specialOffers = [
  {
    imageUrl: "/solmaznur-images/solmaznur6.jpg",
    name: "Product Name",
    oldPrice: "€49.99",
    newPrice: "€39.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur7.jpg",
    name: "Product Name",
    oldPrice: "€69.95",
    newPrice: "€47.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur22.jpg",
    name: "Product Name",
    oldPrice: "€29.95",
    newPrice: "€18.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur8.jpg",
    name: "Product Name",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur9.jpg",
    name: "Product Name",
    oldPrice: "€17.95",
    newPrice: "€12.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur10.jpg",
    name: "Product Name",
    oldPrice: "€59.95",
    newPrice: "€35.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur11.jpg",
    name: "Product Name",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur12.jpg",
    name: "Product Name",
    oldPrice: "€119.95",
    newPrice: "€99.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur13.jpg",
    name: "Product Name",
    oldPrice: "€27.95",
    newPrice: "€17.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur14.jpg",
    name: "Product Name",
    oldPrice: "€89.95",
    newPrice: "€69.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur15.jpg",
    name: "Product Name",
    oldPrice: "€47.95",
    newPrice: "€39.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur16.jpg",
    name: "Product Name",
    oldPrice: "€27.95",
    newPrice: "€14.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur17.jpg",
    name: "Product Name",
    oldPrice: "€19.95",
    newPrice: "€9.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur18.jpg",
    name: "Product Name",
    oldPrice: "€25.95",
    newPrice: "€19.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur19.jpg",
    name: "Product Name",
    oldPrice: "€31.99",
    newPrice: "€24.95",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur25.jpeg",
    name: "Product Name",
    oldPrice: "€27.95",
    newPrice: "€19.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur23.jpeg",
    name: "Product Name",
    oldPrice: "€49.95",
    newPrice: "€35.99",
  },
  {
    imageUrl: "/solmaznur-images/solmaznur24.jpeg",
    name: "Product Name",
    oldPrice: "€38.95",
    newPrice: "€29.99",
  },
]

const DiscountSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1800px]">
        <h2 className="text-3xl font-extrabold text-black mb-8 2xl:text-3xl 2xl:px-4">
          Special Offers
        </h2>
        <div className="flex space-x-4 md:p-0 md:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

            {specialOffers.map((offer, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <div className="relative">
                  <Image
                    src={offer.imageUrl}
                    alt="Product Image"
                    className="w-full h-[550px] object-cover rounded"
                    width={500}
                    height={700}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-black 2xl:text-[22px]">
                    {offer.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <button name="add-to-cart" className="bg-black text-white py-2 px-4 2xl:text-md">
                      Add To Cart
                    </button>
                    <span className="text-black font-semibold 2xl:text-lg">
                      <div className="line-through text-red-500">
                        {offer.oldPrice}
                      </div>
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
