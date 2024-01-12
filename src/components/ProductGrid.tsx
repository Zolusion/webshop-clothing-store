"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';
import ProductGridData from '@/content/ProductGrid.json'

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
                {ProductGridData.map((product, index) => {
                    return (
                        <div key={index} className={` 'hidden grid-cols-12 col-span-12 sm:col-span-6 md:col-span-3 2xl:col-span-3 relative' : ''} `}>
                            <div className='relative'>
                                <Image
                                    src={product.imageUrl}
                                    alt={`Product ${index + 1}`}
                                    className='object-cover w-[500px] h-[700px] 2xl:h-[1200px] 2xl:w-[1200px] object-center opacity-100 transition-opacity group-hover:opacity-75'
                                    loading='lazy'
                                    width={800}
                                    height={700}
                                    quality={100}
                                    unoptimized
                                />

                                <div className='absolute inset-0 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                    <div className='bg-black bg-opacity-75 p-4 text-white h-full'>
                                        <h3 className='text-[20px] font-thin'>{product.productName}</h3>
                                        <p className='font-semibold'>€{product.price}</p>
                                    </div>

                                    <div className='bg-black bg-opacity-75 p-4 flex items-center justify-between'>
                                        <a
                                            href={"/cart"}
                                            onClick={(e) => handleAddToCart(e, product)}
                                            className="text-white hover:underline transition duration-300"
                                        >
                                            {product.button.cart}
                                        </a>
                                        <button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300'>
                                            Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

    );
};

export default ProductGrid;
