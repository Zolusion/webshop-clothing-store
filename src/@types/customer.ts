export interface ProductCart {
  id?: string;
  productName: string;
  description: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

export interface Customer {
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