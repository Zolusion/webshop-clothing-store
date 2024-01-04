import * as React from "react";
import CartComponent from "@/components/CartComponent";
import ReduxProvider from "@/components/ReduxProvider";
import type { Metadata } from "next";
import RecommandedProducts from "@/components/RecommandedProducts";

const title = "Shopping Cart";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

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
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Cart = ({
  params,
  searchParams,
  customer,
}: PageProps & { customer: Customer }) => {
  return (
    <ReduxProvider>
      <CartComponent customer={customer} />
      <RecommandedProducts />
    </ReduxProvider>
  );
};

export default Cart;
