"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
    {
        id: "1",
        imageUrl: "/solmaznur-images/solmaznur1.jpg",
        productName: "Product 1",
        price: 69.99,
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: "2",
        imageUrl: "/solmaznur-images/solmaznur2.jpg",
        productName: "Product 2",
        price: 99.99,
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
    {
        id: "3",
        imageUrl: "/solmaznur-images/solmaznur3.jpg",
        productName: "Product 3",
        price: 49.99,
        button: {
            cart: "Add to cart",
            link: "#",
        },
    },
];

const ProductGrid = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddToCart = (e: any, product: any) => {
        dispatch(addItem(product));
        e.preventDefault();
        router.push("/cart");
    };
    return (
        <section className="bg-white">
            <div className="grid grid-cols-12">
                {products.map((product, index) => {
                    return (
                        <div
                            key={index}
                            className="col-span-12 sm:col-span-6 md:col-span-4 relative"
                        >
                            <div className="group">
                                <button className="block aspect-w-4 aspect-h-5 overflow-hidden relative">
                                    <Image
                                        src={product.imageUrl}
                                        className="object-cover w-full h-[700px] 2xl:h-[1200px] object-center opacity-100 transition-opacity group-hover:opacity-75"
                                        alt={`Product ${index + 1}`}
                                        width={500}
                                        height={700}
                                        loading="lazy"
                                        quality={100}
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 flex flex-col items-start justify-end opacity-0 transition-opacity group-hover:opacity-100 bg-black bg-opacity-50">
                                        <p className="text-white text-lg font-bold mb-2 px-4">
                                            {product.productName}
                                        </p>
                                        <p className="text-white text-right mb-4 px-4">€{product.price}</p>
                                        <a
                                            href={"/cart"}
                                            onClick={(e) => handleAddToCart(e, product)}
                                            className="text-white bg-black px-4 py-2 w-full"
                                        >
                                            {product.button.cart}
                                        </a>
                                    </div>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

    );
};

export default ProductGrid;
