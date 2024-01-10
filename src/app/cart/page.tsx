"use client";
import CartComponent from "@/components/CartComponent";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface ProductCart {
  image: string;
  productname: string;
  price: number;
  quantity: number;
  totalprice: number;
}

interface Customer {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  paymentmethod: string;
  orderstatus: string;
  products: ProductCart[];
}

interface PageProps {
  params: {slug: string};
  searchParams: { [key: string]: string | string[] | undefined };
  // customer any
}

const Cart = ({ params, searchParams }: PageProps) => {
  return <CartComponent />;
};

export default Cart;