import Image from "next/legacy/image"
import React from 'react'

const title = "Our most popular products"

const products = [
    {
        imageUrl: "/image1.jpg",
        productName: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€69.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    },
    {
        imageUrl: "/image2.jpg",
        productName: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€99.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    },
    {
        imageUrl: "/image3.jpg",
        productName: "Product 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€49.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    },
    {
        imageUrl: "/image4.jpg",
        productName: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€79.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    }
]

const ProductGrid = () => {
  return (
    <section className="container mx-auto my-8 max-w-7xl">
        <h1 className="sm:text-3xl text-[26px] font-bold mb-4 px-6">{title}</h1>
        <div className="grid grid-cols-12 gap-4 px-6">
            <div className="bg-white shadow-md rounded-lg p-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image 
                        src={products[0].imageUrl} 
                        className="w-full object-cover rounded-lg min-h-[500px]" 
                        alt="Product 1"
                        width={600}
                        height={600}
                    />
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">{products[0].productName}</h2>
                <p className="text-gray-700">{products[0].description}</p>
                <p className="text-gray-900 font-bold mt-2">{products[0].price}</p>
                <button name='button' className="bg-blue-500 text-white py-2 px-4 mt-4">{products[0].button.text}</button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image 
                        src={products[1].imageUrl} 
                        className="w-full object-cover rounded-lg min-h-[500px]" 
                        alt="Product 2"
                        width={600}
                        height={600}
                    />
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">{products[1].productName}</h2>
                <p className="text-gray-700">{products[1].description}</p>
                <p className="text-gray-900 font-bold mt-2">{products[1].price}</p>
                <button name='button' className="bg-blue-500 text-white py-2 px-4 mt-4">{products[1].button.text}</button>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image 
                        src={products[2].imageUrl} 
                        className="w-full object-cover rounded-lg min-h-[500px]" 
                        alt="Product 3"
                        width={600}
                        height={600}
                    />
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">{products[2].productName}</h2>
                <p className="text-gray-700">{products[2].description}</p>
                <p className="text-gray-900 font-bold mt-2">{products[2].price}</p>
                <button name='button' className="bg-blue-500 text-white py-2 px-4 mt-4">{products[2].button.text}</button>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-4 col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image 
                        src={products[3].imageUrl} 
                        className="w-full object-cover rounded-lg min-h-[500px]" 
                        alt="Product 4"
                        width={600}
                        height={600}
                    />
                </a>
                <h2 className="text-lg text-black mt-2 font-bold">{products[3].productName}</h2>
                <p className="text-gray-700">{products[3].description}</p>
                <p className="text-gray-900 font-bold mt-2">{products[3].price}</p>
                <button name='button' className="bg-blue-500 text-white py-2 px-4 mt-4">{products[3].button.text}</button>
            </div>
        </div>
    </section>

  )
}

export default ProductGrid