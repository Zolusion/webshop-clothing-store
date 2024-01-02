"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { addItem } from "@/store/cart/cartSlice";
import { useDispatch } from 'react-redux';

const products = [
  {
    id: "1",
    imageUrl: "/solmaznur-images/solmaznur6.jpg",
    productName: "Product 1",
    price: 39.99,
    button: {
      cart: "Add to cart",
      link: "#",
    },
  },
  {
    id: "2",
    imageUrl: "/solmaznur-images/solmaznur7.jpg",
    productName: "Product 2",
    price: 47.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "3",
    imageUrl: "/solmaznur-images/solmaznur22.jpg",
    productName: "Product 3",
    price: 18.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "4",
    imageUrl: "/solmaznur-images/solmaznur8.jpg",
    productName: "Product 4",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "5",
    imageUrl: "/solmaznur-images/solmaznur9.jpg",
    productName: "Product 5",
    price: 12.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "6",
    imageUrl: "/solmaznur-images/solmaznur10.jpg",
    productName: "Product 6",
    price: 35.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "7",
    imageUrl: "/solmaznur-images/solmaznur11.jpg",
    productName: "Product 7",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "8",
    imageUrl: "/solmaznur-images/solmaznur12.jpg",
    productName: "Product 8",
    price: 99.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "9",
    imageUrl: "/solmaznur-images/solmaznur13.jpg",
    productName: "Product 9",
    price: 17.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "10",
    imageUrl: "/solmaznur-images/solmaznur14.jpg",
    productName: "Product 10",
    price: 69.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "11",
    imageUrl: "/solmaznur-images/solmaznur15.jpg",
    productName: "Product 11",
    price: 39.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "12",
    imageUrl: "/solmaznur-images/solmaznur16.jpg",
    productName: "Product 12",
    price: 14.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "13",
    imageUrl: "/solmaznur-images/solmaznur17.jpg",
    productName: "Product 13",
    price: 9.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "14",
    imageUrl: "/solmaznur-images/solmaznur18.jpg",
    productName: "Product 14",
    price: 19.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "15",
    imageUrl: "/solmaznur-images/solmaznur19.jpg",
    productName: "Product 15",
    price: 24.95,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "16",
    imageUrl: "/solmaznur-images/solmaznur25.jpeg",
    productName: "Product 16",
    price: 19.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "17",
    imageUrl: "/solmaznur-images/solmaznur23.jpeg",
    productName: "Product 17",
    price: 35.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
  {
    id: "18",
    imageUrl: "/solmaznur-images/solmaznur24.jpeg",
    productName: "Product 18",
    price: 29.99,
    button: {
      cart: "Add to cart",
      link: "#",
    }
  },
]

const DiscountSection = () => {
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
              className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 2xl:col-span-2 relative"
            >
              <div className="group">
                <button className="block aspect-w-4 aspect-h-5 overflow-hidden">
                  <Image
                    src={product.imageUrl}
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

export default DiscountSection