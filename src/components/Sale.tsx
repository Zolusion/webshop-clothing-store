// DiscountSection.js

import Image from "next/image";
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
      <div className="container mx-auto max-w-7xl ">
        <h2 className="text-3xl font-semibold text-black text-center mb-8">
          Special Offers
        </h2>
        <div className="flex space-x-4 md:p-0 md:overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[0].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[0].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[0].name}
                </h3>
                <p className="text-gray-600">{specialOffers[0].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[0].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[1].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[1].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  Product Name
                </h3>
                <p className="text-gray-600">{specialOffers[1].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[1].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[2].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[2].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[2].name}
                </h3>
                <p className="text-gray-600">{specialOffers[2].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-800 font-semibold">
                    <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  </span>
                  <span className="text-green-500 font-semibold">
                    {specialOffers[2].newPrice}
                  </span>
                </div>
              </div>
            </div>


            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[3].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[3].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[3].name}
                </h3>
                <p className="text-gray-600">{specialOffers[3].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[3].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[4].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[4].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[4].name}
                </h3>
                <p className="text-gray-600">{specialOffers[4].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[4].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[5].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[5].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[5].name}
                </h3>
                <p className="text-gray-600">{specialOffers[5].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[5].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[6].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[6].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[6].name}
                </h3>
                <p className="text-gray-600">{specialOffers[6].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[6].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[7].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[7].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[7].name}
                </h3>
                <p className="text-gray-600">{specialOffers[7].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[7].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[8].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[8].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[8].name}
                </h3>
                <p className="text-gray-600">{specialOffers[8].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[8].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[9].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[9].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[9].name}
                </h3>
                <p className="text-gray-600">{specialOffers[9].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[9].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[10].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[10].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[10].name}
                </h3>
                <p className="text-gray-600">{specialOffers[10].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[10].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[11].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[11].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[11].name}
                </h3>
                <p className="text-gray-600">{specialOffers[11].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="add-to-cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[11].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[12].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[12].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[12].name}
                </h3>
                <p className="text-gray-600">{specialOffers[12].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="Add To Cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[12].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[13].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[13].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[13].name}
                </h3>
                <p className="text-gray-600">{specialOffers[13].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[13].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[14].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[14].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[14].name}
                </h3>
                <p className="text-gray-600">{specialOffers[14].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="cart" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[14].newPrice}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-md">
              <div className="relative">
                <Image
                  src={specialOffers[15].imageUrl}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded min-h-[600px]"
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr">
                  {specialOffers[15].discount}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {specialOffers[15].name}
                </h3>
                <p className="text-gray-600">{specialOffers[15].description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button name="button" className="bg-blue-500 text-white py-2 px-4">Add To Cart</button>
                  <span className="text-green-500 font-semibold">{specialOffers[15].newPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
