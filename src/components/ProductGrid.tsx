import Image from "next/legacy/image"
import React from 'react'

const title = "Our most popular products"

const products = [
    {
        imageUrl: "/solmaznur-images/solmaznur1.jpg",
        productName: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€69.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    },
    {
        imageUrl: "/solmaznur-images/solmaznur2.jpg",
        productName: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€99.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    },
    {
        imageUrl: "/solmaznur-images/solmaznur3.jpg",
        productName: "Product 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "€49.99",
        button: {
            text: "Add to cart",
            link: "#",
        }
    },
    {
        imageUrl: "/solmaznur-images/solmaznur4.jpg",
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
        <section className="container mx-auto my-8 max-w-7xl lg:max-w-[2200px]">
            <h1 className="2xl:text-5xl text-[26px] font-bold mb-4 px-6">{title}</h1>
            <div className="grid grid-cols-12 gap-4 px-6">
                {products.map((product, index) => (
                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                        <div className="bg-white shadow-md rounded-lg p-4 h-full">
                            <a href="#" className="block aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
                                <Image
                                    src={product.imageUrl}
                                    className="object-cover w-full h-full rounded-lg"
                                    alt={`Product ${index + 1}`}
                                    width={500}
                                    height={700}
                                />
                            </a>
                            <h2 className="text-lg 2xl:text-2xl text-black mt-2 font-bold">{product.productName}</h2>
                            <p className="text-gray-700 2xl:text-lg">{product.description}</p>
                            <p className="text-gray-900 font-bold mt-2 2xl:text-2xl">{product.price}</p>
                            <button name="button" className="bg-black text-white py-2 px-4 mt-4 2xl:text-lg">
                                {product.button.text}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default ProductGrid