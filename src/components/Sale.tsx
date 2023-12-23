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
    <section className="bg-black">
      <div>
        <div className="flex space-x-4 md:p-0 md:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {specialOffers.map((offer, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden group-hover:opacity-75">
                  <Image
                    src={offer.imageUrl}
                    alt="Product Image"
                    className="w-full h-[550px] object-cover"
                    width={500}
                    height={700}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-semibold mb-2">{offer.name}</h3>
                  <div className="flex flex-col items-center justify-center ml-2 mb-2">
                    <div className="line-through text-red-500 font-bold text-2xl">
                      {offer.oldPrice}
                    </div>
                    <div className="text-white font-semibold text-2xl">
                      {offer.newPrice}
                    </div>
                  </div>
                  <button name="add-to-cart" className="text-white bg-black px-4 py-2 w-full">
                    Add To Cart
                  </button>
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
