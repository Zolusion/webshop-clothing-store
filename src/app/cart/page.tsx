import * as React from "react";
import CartComponent from "@/components/CartComponent";
import ReduxProvider from "@/components/ReduxProvider";
import RecommandedProducts from "@/components/RecommandedProducts";
import Customer from "@/@types/customer";
import type { Metadata } from "next";

const title = "Shopping Cart";

export const metadata: Metadata = {
  title: `${title} | Solmaz Fashion`,
};

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
