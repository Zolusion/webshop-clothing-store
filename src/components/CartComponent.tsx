"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addItem, removeItem } from "@/store/cart/cartSlice";
import { useDispatch } from "react-redux";

interface ProductCart {
  id?: string;
  productName: string;
  description: string;
  imageUrl: string;
  quantity: number;
  price: number;
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

const calculateTotalPrice = (products: ProductCart[], vatRate: number) => {
  console.log("calculateTotalPrice ", products, vatRate);
  const totalPriceWithoutVat = products?.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  const vatAmount = totalPriceWithoutVat * (vatRate / 100);
  const totalPriceWithVat = totalPriceWithoutVat + vatAmount;
  return {
    totalPriceWithoutVat: totalPriceWithoutVat.toFixed(2),
    vatAmount: vatAmount.toFixed(2),
    totalPriceWithVat: totalPriceWithVat.toFixed(2),
  };
};
const calculateSubtotal = (item: { price: number; quantity: number }) => {
  return (item.price * item.quantity).toFixed(2);
};
const CartComponent: React.FC<{ customer?: Customer }> = ({ customer }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.cart);
  const handleDelete = (itemId: string) => {
    dispatch(removeItem(itemId));
  };
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [customerZipCode, setCustomerZipCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  if (!customer) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Shopping Cart
        </h2>
        <div className="bg-gray-100 p-4 rounded-md mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-black mt-8 mx-auto max-w-7xl 2xl:max-w-[1800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {items?.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div className="w-full">
                {items?.map((item: any) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 py-4 flex items-between w-full"
                  >
                    <div className="flex gap-2 items-center">
                      <Image
                        src={item.image || item.imageUrl}
                        alt={item.productName}
                        className="w-20 h-20 object-cover rounded mr-4"
                        width={80}
                        height={80}
                        quality={100}
                        unoptimized
                        priority
                        style={{ objectFit: "cover" }}
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800">
                          {item.productName}
                        </span>
                        <span className="text-gray-500">
                          €{parseFloat(item.price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center ml-auto">
                      <span className="mr-2 text-gray-800">Quantity:</span>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10);
                          dispatch(addItem({ ...item, quantity: newQuantity }));
                        }}
                        className="w-12 px-2 py-1 border border-gray-300 rounded text-gray-800"
                      />
                      <button
                        className="ml-4 text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-6">
                  <div className="flex items-center mb-4 mt-4">
                    <table className="table-auto w-full">
                      <tbody className="grid grid-cols-3 2xl:grid-cols-4 gap-4 text-gray-800">
                        <tr>
                          <td className="text-gray-800 font-bold">Name:</td>
                          <input
                            placeholder="Enter your name"
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">Email:</td>
                          <input
                            placeholder="Enter your email"
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">Phone:</td>
                          <input
                            placeholder="Enter your phone number"
                            type="tel"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">Address:</td>
                          <input
                            placeholder="Enter your address"
                            type="text"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">City:</td>
                          <input
                            placeholder="Enter your city"
                            type="text"
                            value={customerCity}
                            onChange={(e) => setCustomerCity(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">Country:</td>
                          <input
                            placeholder="Enter your country"
                            type="text"
                            value={customerCountry}
                            onChange={(e) => setCustomerCountry(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">Zip Code:</td>
                          <input
                            placeholder="Enter your zip code"
                            type="text"
                            value={customerZipCode}
                            onChange={(e) => setCustomerZipCode(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">
                            Shipping Method:
                          </td>
                          <input
                            placeholder="Enter your shipping method"
                            type="text"
                            value={shippingMethod}
                            onChange={(e) => setShippingMethod(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr>
                          <td className="text-gray-800 font-bold">
                            Payment Method:
                          </td>
                          <input
                            placeholder="Enter your payment method"
                            type="text"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="text-gray-600 border border-gray-300 rounded px-2 py-1"
                          />
                        </tr>
                        <tr className="flex flex-col justify-center">
                          <td className="text-gray-800 font-bold">
                            Shipping Cost:
                          </td>
                          €
                          {parseFloat(
                            calculateTotalPrice(items, 21).vatAmount
                          ) +
                            parseFloat(calculateSubtotal(items[0])).toFixed(2)}
                        </tr>
                        <tr className="flex flex-col justify-center">
                          <td className="text-gray-800 font-bold">Total:</td>€
                          {calculateTotalPrice(items, 21).totalPriceWithVat}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white mt-4 p-5 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Recommanded Products
          </h2>
          <div className="rounded-md mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="relative h-64">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Product Image"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    Product Name
                  </h3>
                  <p className="text-gray-500">Description</p>
                </div>
              </div>
              <div>
                <div className="relative h-64">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Product Image"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    Product Name
                  </h3>
                  <p className="text-gray-500">Description</p>
                </div>
              </div>
              <div>
                <div className="relative h-64">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Product Image"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    Product Name
                  </h3>
                  <p className="text-gray-500">Description</p>
                </div>
              </div>
              <div>
                <div className="relative h-64">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Product Image"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    Product Name
                  </h3>
                  <p className="text-gray-500">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [formData, setFormData] = useState<Customer>({
    name: customer?.name || "Demo",
    surname: customer?.surname || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
    address: customer?.address || "",
    city: customer?.city || "",
    state: customer?.state || "",
    zip: customer?.zip || "",
    country: customer?.country || "",
    paymentmethod: "IDEAL",
    orderstatus: customer?.orderstatus || "",
    products: customer?.products || [],
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const paymentMethods = [
    "IDEAL",
    "Credit Card",
    "PayPal",
    "Bank Transfer",
    "BanContact",
  ];
  const vatRate = 21;
  const total = calculateTotalPrice(customer.products, vatRate);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.surname.trim()) {
      errors.surname = "Surname is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    }

    setFormErrors(errors as any);

    if (Object.keys(errors).length > 0) {
      console.log("Form has errors:", errors);
    } else {
      console.log("Form submitted successfully:", formData);
    }
  };

  const { totalPriceWithoutVat, vatAmount, totalPriceWithVat } =
    calculateTotalPrice(customer.products, vatRate);

  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-black">Shoppings Cart</h2>
      <div className="mb-6">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.name && (
              <p className="text-red-500">{formErrors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname" className="text-black">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.surname && (
              <p className="text-red-500">{formErrors.surname}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-black">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.phone && (
              <p className="text-red-500">{formErrors.phone}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-black">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.address && (
              <p className="text-red-500">{formErrors.address}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-black">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.city && (
              <p className="text-red-500">{formErrors.city}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="zipCode" className="text-black">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zip}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.zip && <p className="text-red-500">{formErrors.zip}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-black">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {formErrors.country && (
              <p className="text-red-500">{formErrors.country}</p>
            )}
          </div>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">Order Details</h3>
        <p className="font-semibold mb-2 text-black">
          Order Status: {customer.orderstatus}
        </p>
        <div className="overflow-x-auto text-black">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {customer.products.map((product) => (
                <tr key={product.productName}>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.productName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-semibold mt-4 text-black">
          Total Price (Excluding VAT): ${totalPriceWithoutVat}
        </p>
        <p className="font-semibold text-black">VAT (21%): ${vatAmount}</p>
        <p className="font-semibold mb-4 text-black">
          Total Price (Including VAT): ${totalPriceWithVat}
        </p>
      </div>
    </div>
  );
};

export default CartComponent;
