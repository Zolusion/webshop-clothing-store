"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "@/@types/product";

const persistedCartItems = localStorage.getItem("cartItems");
const initialState: any = {
  items: persistedCartItems ? JSON.parse(persistedCartItems) : [],
  cart: "cart",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      if (existingItem) {
        console.log("newItem quantity", action.payload);

        existingItem.quantity = action.payload.quantity;
      } else {
        let cartnewItem = { ...action.payload, quantity: 1 };
        if (action.payload.price) {
          cartnewItem = {
            id: cartnewItem.id,
            productName: cartnewItem.productName,
            description: cartnewItem.description,
            imageUrl: cartnewItem.imageUrl,
            quantity: 1,
            price: cartnewItem.price,
          };
        }
        state.items.push(cartnewItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;