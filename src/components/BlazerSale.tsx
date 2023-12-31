"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

interface Product {
  imageUrl: string;
  name: string;
  oldPrice: string;
  newPrice: string;
}

const specialOffers: Product[] = [
  {
    imageUrl: "https://img.freepik.com/free-photo/elderly-business-woman-grey-suit-outdoors_1303-29564.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€49.99",
    newPrice: "€39.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/young-beautiful-woman-sitting-grey-wall_176420-11149.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€69.95",
    newPrice: "€47.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/young-woman-with-chain-necklace-posing_23-2149403063.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€29.95",
    newPrice: "€18.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/mirthful-beautiful-long-haired-woman-elegant-jacket-looking-away-smiling_132075-8036.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/elegant-businesswoman-walking-city-with-clipboard_23-2147989684.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€17.95",
    newPrice: "€12.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/beautiful-woman-portrait-garden_1328-1840.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€59.95",
    newPrice: "€35.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/vertical-portrait-beautiful-young-girl-smiling-white-background-high-quality-photo_144627-75411.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/high-fashion-portrait-young-beautiful-brunette-woman-wearing-nice-trendy-white-suit-sexy-fashion-model-posing-studio-fashionable-female-isolated-blue_158538-25886.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€119.95",
    newPrice: "€99.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/front-view-beautiful-woman-pink-suit_197531-16812.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€27.95",
    newPrice: "€17.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/beautiful-woman-business-suit-sitting-chair_1303-17685.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€89.95",
    newPrice: "€69.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/portrait-fashion-blonde-business-woman-posing-sitting-chair-looking-camera-medium-shot-adorable-luxury-stylish-girl-trendy-suit-relaxing-public-place-cafe-restaurant_132075-9561.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€47.95",
    newPrice: "€39.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/cute-portrait-attractive-stylish-smiling-woman-walking-city-street-pink-coat_285396-1281.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€27.95",
    newPrice: "€14.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/high-fashion-portrait-young-beautiful-brunette-woman-wearing-nice-trendy-blue-suit-sexy-fashion-model-posing-studio-fashionable-female-isolated-light-pink_158538-22172.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€19.95",
    newPrice: "€9.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/portrait-young-japanese-woman_23-2148870711.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€25.95",
    newPrice: "€19.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/young-woman-model-wearing-long-gray-coat_1303-21155.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€31.99",
    newPrice: "€24.95",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2685.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€27.95",
    newPrice: "€19.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/portrait-fashion-model-walking-city-she-is-looking-camera_197531-1124.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€49.95",
    newPrice: "€35.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/pretty-attractive-stylish-smiling-rich-woman-walking-city-street-pink-coat_285396-1383.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€38.95",
    newPrice: "€29.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/blonde-stunning-woman-walking-alone-city-center-wearing-casual-elegant-coat-dress-making-shopping-alone-street-style-fashion_291049-1337.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€47.95",
    newPrice: "€39.99",
  },
  {
    imageUrl: "https://img.freepik.com/free-photo/girl-jacket_1303-4472.jpg?size=626&ext=jpg&uid=R58238079&ga=GA1.1.608720427.1702289590&semt=ais",
    name: "Product Name",
    oldPrice: "€39.95",
    newPrice: "€29.99",
  }
]

const BlazerSale = () => {
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  const addToCart = (product: Product) => {
    setShoppingCart([...shoppingCart, product]);
    navigate("/cart");
  };

  return (
    <section className="bg-black">
      <div>
        <div className="flex space-x-4 md:p-0 md:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {specialOffers.map((offer, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden group-hover:opacity-75">
                  <Image
                    src={offer.imageUrl}
                    alt="Product Image"
                    className="w-full h-[550px] object-cover"
                    width={500}
                    height={500}
                    loading="lazy"
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
                  <button
                    name="add-to-cart"
                    className="text-white bg-black px-4 py-2 w-full"
                    onClick={() => addToCart(offer)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const DiscountSectionWithRouter = () => (
  <Router>
    <BlazerSale />
  </Router>
);

export default DiscountSectionWithRouter;